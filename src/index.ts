import prompts from "prompts";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { green, red, reset, yellow} from "kolorist";

const cwd = process.cwd();

const DEFAULT_TARGET_DIR = "imaginamos-project";

function isEmpty(path: string) {
	return !fs.readdirSync(path).length;
}

function isValidPackageName(projectName: string) {
	return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
		projectName,
	)
}

function toValidPackageName(projectName: string) {
	return projectName
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/^[._]/, '')
		.replace(/[^a-z\d\-~]+/g, '-')
}

function emptyDir(folder: string) {
	if (!fs.existsSync(folder)) {
		return;
	}

	for (const file of fs.readdirSync(folder)) {
		fs.rmSync(path.resolve(folder, file), {recursive: true, force: true});
	}
}

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

const renameFiles: Record<string, string> = {
  _gitignore: '.gitignore',
}


function copy(src: string, dest: string) {
	const stat = fs.statSync(src)
	if (stat.isDirectory()) {
		copyDir(src, dest)
	} else {
		fs.copyFileSync(src, dest)
	}
}

const templates = [
	{
		name: "template-simple-auth",
		display: "Simple auth",
		color: yellow
	}
]

async function init() {

	let targetDir = DEFAULT_TARGET_DIR;
	let results;

	const getProjectName = () =>
    targetDir === '.' ? path.basename(path.resolve()) : targetDir

	try {
		results = await prompts(
			[
				{
					type: 'text',
					name: 'projectName',
					message: reset("Project name: "),
					initial: DEFAULT_TARGET_DIR,
					onState(state) {
						targetDir = state.value.trim()
					}
				},
				{
					type: () => !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : "select",
					name: "overwrite",
					message: () => 
						(targetDir === "." ? "Current directory" : `Target directory "${targetDir}"`) + ` is not empty. Please choose how to proceed`,
					choices: [
						{title: "Overwrite", value: "overwrite"},
						{title: "Cancel", value: "cancel"},
					]
				},
				{
					type(_, {overwrite}) {
						if (overwrite === "cancel") {
							throw new Error(red('✖ Process cancelled'));
						}
						return null;
					},
					name: "overwriteChecker"
				},
				{
					type: () => (isValidPackageName(getProjectName()) ? null : 'text'),
					name: 'packageName',
					message: reset('Package name:'),
					initial: () => toValidPackageName(getProjectName()),
					validate: (dir) =>
						isValidPackageName(dir) || 'Invalid package.json name',
				},
				{
					type: 'select',
					name: 'template',
					message: reset('Select a template:'),
					choices: templates.map((template) => {
						const frameworkColor = template.color
						return {
							title: frameworkColor(template.display || template.name),
							value: template,
						}
					}),
				},
			], 
			{
				onCancel() {
					throw new Error(red('✖ Operation cancelled by the user'))
				}
			}
		);
	} catch (error: any) {
		console.log(error.message);
		return;
	}

	const {overwrite, template, packageName} = results;

	const root = path.join(cwd, targetDir);

	if (overwrite === 'overwrite') {
		emptyDir(root);
	} else {
		fs.mkdirSync(root, {recursive: true});
	}

	const templateDir = path.resolve(fileURLToPath(import.meta.url), `../../${template.name}`);

	const write = (file: string, content?: string) => {
		const targetPath = path.join(root, renameFiles[file] || file);
		if (content) {
			fs.writeFileSync(targetPath, content);

		} else {
			copy(path.join(templateDir, file), targetPath);
		}
	}

	const files = fs.readdirSync(templateDir);
	for (const file of files) {
		if (file === "package.json") continue;
		write(file)
	}

	const pkg = JSON.parse(fs.readFileSync(path.join(templateDir, "package.json"), "utf-8"));

	pkg.name = packageName || getProjectName();

	write('package.json', JSON.stringify(pkg, null, 2));

	const cdProjectName = path.relative(cwd, root)

	console.log(green(`\nDone. You can run:\n`));
	if (root !== cwd) {
		console.log(
			`  cd ${
					cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName
					}`,
		);
	}
	console.log('  yarn')
	console.log('  yarn dev')
	console.log();
}

init().catch(console.error)
