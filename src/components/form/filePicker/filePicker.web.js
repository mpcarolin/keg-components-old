import React, { useState, useRef } from 'react'
import { useTheme } from 'KegReTheme'
import PropTypes from 'prop-types'
import { P } from '../../typography'
import { Button } from 'KegButton'
import { View } from 'KegView'

/**
 * A component for selecting files from the user's system. Looks better than a basic input element, 
 * and accepts style objects for styling further
 * @param {Object} props - props object. Accepts all standard <input /> props which will be passed to the input element. Additional props:
 * @param {String} props.title - the text inside the button
 * @param {Object} props.style - style for the wrapping View 
 * @param {Object} props.buttonStyle - style for the button 
 * @param {Object} props.fileStyle - style for the file name text
 * @param {Boolean} props.showFile - if true, it will show the file name next to the input
 * @param {Function} props.onFilePicked - function called when a file was selected and handles extracting the file for you: file => { ... }
 */
export const FilePicker = (props) => {
  const { 
    onChange, 
    title, 
    children, 
    style={}, 
    buttonStyle={},
    fileStyle={},
    showFile=true,
    onFilePicked,
    ...args 
  } = props

  const theme = useTheme()
  const componentTheme = theme.get('components.filePicker')

  // store the file selected by the user
  const [ file, setFile ] = useState({})

  // handle user selecting a file
  const handleInputChange = (event) => {
    onChange && onChange(event)

    const file = event.target.files[0]
    if (!file) return

    onFilePicked && onFilePicked(file)
    setFile(file)
  }

  // make an input ref so that we can call the input's click() handler, to start picking files,
  // when the user clicks the button
  const inputRef = useRef()
  if (props.ref)
    props.ref.current = inputRef.current

  const clickInput = () => inputRef.current.click()

  return (
    <View style={ theme.join(componentTheme.view, style) }>
      <Button 
        style={ theme.join(componentTheme.button, buttonStyle) }
        onClick={clickInput}>
        { title }
        { children }
      </Button>

      { // show the file name if the flag is set for it
        showFile && <P style={ theme.join(componentTheme.file, fileStyle) }>
         { file.name }
        </P> 
      }

      { /* this input is hidden from the user, but is still used for selecting a file */ }
      <input 
        { ...args }
        ref={inputRef}
        onChange={handleInputChange}
        style={componentTheme.input} 
        type="file"
      />

    </View>
  )
}

FilePicker.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  fileStyle: PropTypes.object,
  onChange: PropTypes.func,
  showFile: PropTypes.bool
}
