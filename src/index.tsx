import * as React from 'react';
import {render} from 'react-dom';
import {TextInput} from '@contentful/forma-36-react-components';
import {init, FieldExtensionSDK} from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';
import {ChangeEvent, FunctionComponent, useEffect, useState} from "react";

interface AppProps {
    sdk: FieldExtensionSDK;
}

export const App: FunctionComponent<AppProps> = ({sdk}) => {
    const field = sdk.entry.fields['workshop']
    const initialValues = field.getValue()
    const [title, setTitle] = useState(initialValues.title || "")
    const [description, setDescription] = useState(initialValues.description || "")

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    useEffect(() => {
        field.setValue({title, description})
    }, [title, description])

    useEffect(() => {
        sdk.window.startAutoResizer()
    }, [])

    return (
        <section>
            <TextInput placeholder={"Title"} value={title} onChange={handleTitleChange}/>
            <TextInput placeholder={"Description"} value={description} onChange={handleDescriptionChange}/>
        </section>
    )
}

init(sdk => {
    render(<App sdk={sdk as FieldExtensionSDK}/>, document.getElementById('root'));
});

/**
 * By default, iframe of the extension is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }
