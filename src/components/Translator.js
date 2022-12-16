import { useLanguagePreference } from './LanguagePreference';

const Translator = ({ children, englishLabel, spanishLabel }) => {
  const { spanish } = useLanguagePreference();

  const hasTranslation = Array.isArray(children);
  const spanishItem = spanish ? 1 : 0;

  if (children) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{hasTranslation ? children[spanishItem] : children}</>;
  } else {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{!spanish ? englishLabel : spanishLabel}</>;
  }
};

export default Translator;
