import * as React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Reader, ReaderProvider, useReader} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';
import {styles} from './styles';
import {useState} from 'react';

function Inner() {
  const {width, height} = useWindowDimensions();
  const {search, searchResults, goToLocation, addMark} = useReader();
  const [selectedText, setSelectedText] = useState('');
  console.log("🚀 ~ file: index.tsx:20 ~ Inner ~ selectedText:", selectedText)
  const [term, setTerm] = React.useState('');
  console.log('🚀 ~ file: index.tsx:19 ~ Inner ~ term:', term);

  // const handleSelected = (
  //   selected: React.SetStateAction<string>,
  //   cfiRange: any,
  // ) => {
  //   console.log("🚀 ~ file: index.tsx:28 ~ Inner ~ selected:", selected)
  //   console.log("🚀 ~ file: index.tsx:28 ~ Inner ~ cfiRange:", cfiRange)
  //   setSelectedText(selected);
  //   addMark('highlight', cfiRange);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.options}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter a term"
            onChangeText={text => setTerm(text)}
          />

          <TouchableOpacity
            onPress={() => {
              search(term);
            }}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Reader
        src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
        width={width}
        height={height}
        fileSystem={useFileSystem}
        onSelected={(text)=> console.log("Selected words:::::", text)}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              goToLocation(item.cfi);
              console.log('check');
            }}>
            <Text>{item.excerpt}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

export function Search() {
  return (
    <ReaderProvider>
      <Inner />
    </ReaderProvider>
  );
}
