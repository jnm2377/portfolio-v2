import {
  HeaderContainer,
  Header as CarbonHeader,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

export function Header() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <CarbonHeader aria-label="Josefina Mancilla">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="Josefina">
            Mancilla
          </HeaderName>
          <HeaderNavigation aria-label="Josefina Mancilla">
            <HeaderMenuItem isCurrentPage href="#">
              About
            </HeaderMenuItem>
            <HeaderMenuItem href="#">Portfolio</HeaderMenuItem>
            <HeaderMenuItem href="#">Blog</HeaderMenuItem>
            <HeaderMenuItem href="#">Contact</HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem isCurrentPage href="#">
                  About
                </HeaderMenuItem>
                <HeaderMenuItem href="#">Portfolio</HeaderMenuItem>
                <HeaderMenuItem href="#">Blog</HeaderMenuItem>
                <HeaderMenuItem href="#">Contact</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </CarbonHeader>
      )}
    />
  );
}
