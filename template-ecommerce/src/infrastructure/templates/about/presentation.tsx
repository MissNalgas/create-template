import { Card, Text } from '@/infrastructure/components/designSystem';
import Footer from '@/infrastructure/components/footer';
import Topbar from '@/infrastructure/components/topbar';

export default function AboutPresentation() {
	return (
		<Card>
			<Topbar />
			<Card className="w-full max-w-screen-md px-medium my-extraLarge mx-auto">
				<Text className="text-2xl font-bold my-extraLarge" as="h1">
					Acerca de nosotros
				</Text>
				<Text as="p" className="text-justify">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					porttitor lectus eget tellus cursus lobortis. Maecenas
					maximus urna sit amet dolor euismod, ut semper urna
					tincidunt. Quisque hendrerit aliquam odio. Donec elementum
					ornare efficitur. Aenean auctor velit nec orci finibus
					hendrerit. Sed malesuada facilisis vehicula. Sed lacinia mi
					in nunc dapibus tincidunt. Nullam lobortis molestie orci, at
					dapibus orci ultricies sed. Sed porta velit tortor, et
					faucibus velit eleifend eget. Mauris a ligula dictum, mollis
					mi tincidunt, malesuada risus. Vivamus vulputate, ligula
					quis lacinia varius, diam risus euismod elit, in auctor
					nulla velit volutpat nibh. Nulla facilisi. Donec eleifend
					tellus vel dui porttitor blandit. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia
					curae; Vivamus hendrerit aliquam risus, a pellentesque diam
					lacinia ut. Class aptent taciti sociosqu ad litora torquent
					per conubia nostra, per inceptos himenaeos. Praesent aliquam
					imperdiet blandit. Sed eget felis ut ligula finibus molestie
					at quis odio. Nulla pellentesque sollicitudin ipsum quis
					tempor. Nulla vestibulum placerat aliquam. Nunc eget mollis
					ipsum, non feugiat magna. Aenean sed lacus elit. In in lacus
					quam. Maecenas scelerisque facilisis tortor ac congue. Etiam
					vitae tortor nec lorem placerat cursus. Donec neque purus,
					faucibus eu ornare interdum, consectetur eu est. Etiam
					rhoncus egestas rhoncus. Cras lacus sem, egestas id laoreet
					vitae, dignissim eu augue. Curabitur pulvinar, nisl sit amet
					varius bibendum, quam purus faucibus nulla, sit amet
					tincidunt tellus massa mollis neque. Vivamus consectetur est
					libero, ac tristique felis sodales eget. Aenean ac finibus
					nisi. Vestibulum et tincidunt risus. Mauris dignissim justo
					urna, vitae molestie dolor porttitor quis. Morbi gravida
					eleifend dui, ac aliquam enim ullamcorper vitae. Fusce
					pellentesque mauris sit amet sapien imperdiet, vitae
					vehicula libero finibus. Integer vel nibh fermentum,
					eleifend nibh in, fringilla ipsum. Donec vitae velit auctor,
					tempor massa nec, fermentum velit. Donec sed pellentesque
					tellus. Donec cursus vel tellus nec eleifend. Etiam et
					rutrum tellus. Pellentesque eget mi arcu. Mauris ac commodo
					enim. Nulla consequat, lectus quis finibus hendrerit, tortor
					diam dictum mi, in euismod massa arcu blandit nunc.
					Vestibulum ante ipsum primis in faucibus orci luctus et
					ultrices posuere cubilia curae; Cras sagittis ut metus nec
					blandit. Proin pharetra auctor enim non elementum. Duis
					pretium nisi sed nunc imperdiet pharetra.
				</Text>
			</Card>
			<Footer />
		</Card>
	);
}
