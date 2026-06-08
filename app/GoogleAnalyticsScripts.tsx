import Script from "next/script";

const GoogleAnalyticsScripts = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-158081909-1"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'UA-YOURTRACKINGCODEHERE');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScripts;
