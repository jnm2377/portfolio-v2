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
  Toggle,
} from '@carbon/react';
import { useRouter } from 'next/router';
import { useThemePreference } from './ThemePreference';
import cx from 'classnames';
import { Asleep, LightFilled } from '@carbon/react/icons';

const Link = ({ children, href, ...rest }) => {
  const router = useRouter();
  return (
    <a // eslint-disable-line jsx-a11y/anchor-is-valid
      href="#"
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};

export function Header() {
  const router = useRouter();
  const { theme, setTheme } = useThemePreference();
  const headerClassNames = cx({ ['dark-header']: theme === 'g100' });

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <CarbonHeader
          aria-label="Josefina Mancilla"
          className={headerClassNames}
        >
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
              element={Link}
            >
              About
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#portfolio' ? true : false}
              href="/#portfolio"
              element={Link}
            >
              Portfolio
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/blog' ? true : false}
              href="/blog"
              element={Link}
            >
              Blog
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#contact' ? true : false}
              href="/#contact"
              element={Link}
            >
              Contact
            </HeaderMenuItem>
          </HeaderNavigation>
          <Toggle
            onToggle={() => {
              if (theme === 'g10') {
                setTheme('g100');
              }
              if (theme === 'g100') {
                setTheme('g10');
              }
            }}
            labelA={<LightFilled />}
            labelB={<Asleep />}
            id="toggle-1"
            toggled={theme === 'g10' ? false : true}
            size="sm"
          />
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
