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
import { useLanguagePreference } from './LanguagePreference';
import cx from 'classnames';
import { Asleep, LightFilled } from '@carbon/react/icons';
import { useEffect, useState } from 'react';
import Translator from './Translator';

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

export function Header({ home }) {
  const router = useRouter();
  const { theme, setTheme } = useThemePreference();
  const { spanish, setSpanish } = useLanguagePreference();
  const [scrollTop, setScrollTop] = useState(0);
  const [headerPostition, setHeaderPosition] = useState(null);

  const headerClassNames = cx({
    ['dark-header']: theme === 'g100',
    ['is-sticky']: headerPostition === 0,
    ['no-scroll']: !home,
  });

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      setHeaderPosition(
        document.querySelector('.cds--header').getBoundingClientRect().y
      );
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

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
          <HeaderName href="/#hello" prefix="♥" element={Link}>
            {''}
          </HeaderName>
          <HeaderNavigation aria-label="Josefina Mancilla">
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#about' ? true : false}
              href="/#about"
              element={Link}
            >
              <Translator englishLabel="About" spanishLabel="Acerca de" />
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#work' ? true : false}
              href="/#work"
              element={Link}
            >
              <Translator englishLabel="Work" spanishLabel="Trabajo" />
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
              <Translator englishLabel="Contact" spanishLabel="Contacto" />
            </HeaderMenuItem>
          </HeaderNavigation>
          <div className="header-toggle-wrapper">
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
              toggled={theme !== 'g10'}
              size="sm"
              labelText=""
            />
            <Toggle
              onToggle={() => {
                setSpanish(!spanish);
              }}
              labelA="EN"
              labelB="ES"
              id="toggle-2"
              toggled={spanish}
              size="sm"
              labelText=""
            />
          </div>
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
