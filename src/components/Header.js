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
import { useRouter } from 'next/router';

const Link = ({ children, href, ...rest }) => {
  const router = useRouter();
  return (
    <a // eslint-disable-line jsx-a11y/anchor-is-valid
      href="#"
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}>
      {children}
    </a>
  );
};

export function Header() {
  const router = useRouter();
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <CarbonHeader aria-label="Josefina Mancilla">
          {/* <SkipToContent /> */}
          {/* <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          /> */}
          <HeaderName href="/#landing" prefix="♥" element={Link} />
          <HeaderNavigation aria-label="Josefina Mancilla">
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#about' ? true : false}
              href="/#about"
              element={Link}>
              About
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#portfolio' ? true : false}
              href="/#portfolio"
              element={Link}>
              Portfolio
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/blog' ? true : false}
              href="/blog"
              element={Link}>
              Blog
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#contact' ? true : false}
              href="/#contact"
              element={Link}>
              Contact
            </HeaderMenuItem>
          </HeaderNavigation>
          {/* <SideNav
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
          </SideNav> */}
        </CarbonHeader>
      )}
    />
  );
}
