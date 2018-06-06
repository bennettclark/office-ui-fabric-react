import { styled } from '../../Utilities';
import { LinkBase } from './Link.base';
import { ILinkProps, ILinkStyleProps, ILinkStyles } from './Link.types';
import { getStyles } from './Link.styles';

export const Link = styled<ILinkProps, ILinkStyleProps, ILinkStyles>(LinkBase, getStyles);
