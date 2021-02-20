// import React from 'react'
import {useState, useMemo} from 'react'
import AceEditor from "react-ace";
import st from "./AceEditorCustom.module.scss";

import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
const languages = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css"
  ];
  const fontSize = [12, 14,16,18,20, 22, 24]
  const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized_dark",
    "solarized_light",
    "terminal"
  ];
  const defaultValues = [
    `let hello = 'Hello World!'
        console.log(hello);
        }`, 
    `import java.util.*;
    import java.lang.*;
    
    class Rextester
    {  
        public static void main(String args[])
        {
            System.out.println("Hello, World!");
        }
    }`,
    `print ("Hello, world!")`,
    `<xml>`,
    `puts "Hello, world!"`,
    `sass`,
    `markdown`,
    `mysql`,
    ``
  ]
  languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
  });
  themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`))

  
export default function AceEditorCustom({onChange, onLoad}) {
    const [tema, setTema] = useState('monokai')
    const [mode, setmode] = useState('html')
   const [font, setFont] = useState(14)
    const setMode =(e)=>{
        setmode(e.target.value)
    }
    const setTheme=(e)=> {
        setTema( e.target.value);
      }
      const setFontSize=(e)=>{
        console.log(font)
        setFont(parseInt(e.target.value))
      }
    useMemo(() => {
      console.log(font)
    }, [font])
    return (
      <>
      <div className={st.container}>
            <div className={st.editor}>
            <div className={st.controls}>
              <div className={st.field}>
              <label>Til:</label>
              <p className={st.control}>
                <span className={st.select}>
                  <select
                    name="mode"
                    onChange={setMode}
                    value={mode}
                  >
                    {languages.map(lang => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </span>
              </p>
            </div>
          <div className={st.field}>
            <label>Mavzu:</label>
            <p className={st.control}>
              <span className={st.select}>
                <select name="Theme" onChange={setTheme} value={tema}
                >
                  {themes.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
            <div className={st.field}>
            <label>Font:</label>
            <p className={st.control}>
              <span className={st.select}>
                <select name="Font" onChange={setFontSize} value={font}
                >
                  {fontSize.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>
          </div>
            </div>
          <AceEditor 
            style={{width:'100%', height:'100%'}}
            placeholder="Bu yerga dastur kodini yozing..."
            mode={mode}
            theme={tema}
            name="blah2"
            onLoad={onLoad}
            onChange={onChange}
            fontSize={font}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`Kompliyator tez orada ishga tushadi
            `}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 5,
            }} />
            </div>
        <div className={st.result}>
        <div className={st.controls}>
              <div className={st.field}>
                <code>Result</code>
              </div>
            </div>
          <div className={st.display}> 
            <code>Compliyator tez orada ishga tushadi<span className={st.cursor}></span></code>
          </div>
            
          
        </div>
        </div>
    
      </>
      )
}
