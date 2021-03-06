const DEFAULT_LANGUAGE = 'en';
const DEFAULT_TITLE = 'COOP Newsletter';
const DEFAULT_TEXT_COLOR = '#000000';
const DEFAULT_BACKGROUND_COLOR = '#ffffff';

const NEWSLETTER_HTML = (title, content, backgroundColor, textColor) => `<!DOCTYPE html><html lang="sk">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"><title>${title}</title>
<style>html, body {margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;}
table {border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;}a {text-decoration: none;}
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {u ~ div .email-container {min-width: 320px !important;}}
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {u ~ div .email-container {min-width: 375px !important;}}
@media only screen and (min-device-width: 414px) {u ~ div .email-container {min-width: 414px !important;}}</style></head>
<body style="width:100%;margin:0;padding:0!important;background-color:${backgroundColor};"><center aria-roledescription="email" lang="sk" style="width:100%;background-color:${backgroundColor};">
<table align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" width="750" style="background-color:${backgroundColor};">
<tr><td style="text-align:center;font-family:arial;font-size:11px;background-color:${backgroundColor};color:${textColor};">V prípade, že sa vám tento mail nezobrazuje správne, <a href="*|ARCHIVE|*" style="text-decoration:underline;color:#7080FF">kliknite sem</a>.<br/><br/>
</td></tr><tr><td>${content}</td></tr><tr><td align="center" valign="top" style="padding-top:20px;padding-bottom:20px;"><br/><br/><table border="0" cellpadding="0" cellspacing="0"><tr>
<td align="center" valign="top" style="background-color:${backgroundColor};color:${textColor};font-family:Helvetica,Arial,sans-serif;font-size:11px;line-height:150%;text-align:center;">
Tento email bol zaslaný na <a href="mailto:*|EMAIL|*" target="_blank" style="color:#404040 !important;">*|EMAIL|*</a>
<br/><a href="*|ABOUT_LIST|*" target="_blank" style="color:#404040 !important;"><em>Prečo mi prišiel tento email?</em></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="*|UNSUB|*" style="color:#404040 !important;">Odhlásiť z noviniek</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="*|UPDATE_PROFILE|*" style="color:#404040 !important;">
Zmeniť nastavenia</a><br/>*|LIST:ADDRESSLINE|*<br/><br/></td></tr></table></td></tr></table></center></body></html>`

export { 
    DEFAULT_LANGUAGE,
    DEFAULT_TITLE,
    DEFAULT_TEXT_COLOR,
    DEFAULT_BACKGROUND_COLOR,
    NEWSLETTER_HTML
}