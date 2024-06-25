import styled from '@emotion/styled';
import { Table as TableMantine } from '@mantine/core';

export const CustomTable = styled(TableMantine)`
	& td[data-header]::before {
		content: attr(data-header);
		margin: 0 8px;
		font-weight: bold;
	}
`;
