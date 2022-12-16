import { useLanguagePreference } from './LanguagePreference';

const Translator = ({ children }) => {
  const { spanish } = useLanguagePreference();

  const hasTranslation = Array.isArray(children);
  const spanishItem = spanish ? 1 : 0;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{hasTranslation ? children[spanishItem] : children}</>;
};

export default Translator;
