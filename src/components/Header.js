import {
  Button,
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
import { Asleep, LightFilled, ChevronLeft } from '@carbon/react/icons';
import { useEffect, useState, useRef } from 'react';
import Translator from './Translator';

export function Header({ home }) {
  const router = useRouter();
  const { theme, setTheme } = useThemePreference();
  const { spanish, setSpanish } = useLanguagePreference();
  const [scrollTop, setScrollTop] = useState(0);
  const [headerPostition, setHeaderPosition] = useState(null);
  const [hide, setHide] = useState(false);
  const closeBtnRef = useRef();

  const Link = ({ children, href, ...rest }) => {
    const router = useRouter();
    return (
      <a // eslint-disable-line jsx-a11y/anchor-is-valid
        href="#"
        {...rest}
        onClick={(e) => {
          e.preventDefault();
          router.push(href);
          setHide(false);
        }}
      >
        {children}
      </a>
    );
  };

  const headerClassNames = cx('sidenav-default', {
    ['dark-header']: theme === 'g100',
    ['is-sticky']: headerPostition === 0,
    ['no-scroll']: !home,
    ['slide-in']: hide,
  });

  useEffect(() => {
    closeBtnRef.current.focus();
  }, [hide]);

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
      render={() => (
        <CarbonHeader
          aria-label="Josefina Mancilla"
          className={headerClassNames}
        >
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={() => {
              setHide(true);
            }}
            aria-hidden={hide}
          />
          <HeaderName href="/#hello" prefix="♥" element={Link}>
            {''}
          </HeaderName>
          <HeaderNavigation aria-label="Josefina Mancilla">
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#about'}
              href="/#about"
              element={Link}
            >
              <Translator englishLabel="About" spanishLabel="Acerca de" />
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#work'}
              href="/#work"
              element={Link}
            >
              <Translator englishLabel="Work" spanishLabel="Trabajo" />
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/blog'}
              href="/blog"
              element={Link}
            >
              Blog
            </HeaderMenuItem>
            <HeaderMenuItem
              isCurrentPage={router.pathname === '/#contact'}
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
          <SideNav
            aria-label="Side navigation"
            expanded={true}
            isPersistent={false}
            aria-hidden={!hide}
          >
            <Button
              className="close-menu-button"
              aria-label="Close menu"
              onClick={() => {
                setHide(false);
              }}
              ref={closeBtnRef}
            >
              <ChevronLeft />
            </Button>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem
                  href="/#about"
                  element={Link}
                  isCurrentPage={router.pathname === '/#about'}
                >
                  <Translator englishLabel="About" spanishLabel="Acerca de" />
                </HeaderMenuItem>
                <HeaderMenuItem
                  href="/#work"
                  element={Link}
                  isCurrentPage={router.pathname === '/#work'}
                >
                  <Translator englishLabel="Work" spanishLabel="Trabajo" />
                </HeaderMenuItem>
                <HeaderMenuItem
                  href="/blog"
                  element={Link}
                  isCurrentPage={router.pathname === '/blog'}
                >
                  Blog
                </HeaderMenuItem>
                <HeaderMenuItem
                  href="/#contact"
                  element={Link}
                  isCurrentPage={router.pathname === '/#contact'}
                >
                  <Translator englishLabel="Contact" spanishLabel="Contacto" />
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </CarbonHeader>
      )}
    />
  );
}
