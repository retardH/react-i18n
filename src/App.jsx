import { useState, Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";

const locales = {
  en: { title: "English" },
  cn: { title: "Chinese" },
};

function App() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);
  return (
    <>
      <div>
        <ul>
          {
            Object.keys(locales).map(locale => (
              <li key={locale}>
                <button style={{fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}} onClick={() => {i18n.changeLanguage(locale)}}>
                  {locales[locale].title}
                </button>
              </li>
            ))
          }
        </ul>
        <h1>{t("main.header")}</h1>
        <button onClick={() => setMessages(messages + 1)}>
          +1 message
        </button>
        <p>
          {t('main.new_messages_other', {count: messages})}
        </p>
        <p>
          {t('main.current_date', {date: new Date()})}
        </p>
        <p>
          {t('main.incoming_message', {from: "Ann"})} <br/>
          {t('main.message_contents_male', {body: "How are you?", context: "Male"})}
        </p>
      </div>
    </>
  );
}

const WrapperApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
};

export default WrapperApp;
