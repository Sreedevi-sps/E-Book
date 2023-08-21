import {SafeAreaView, useWindowDimensions} from 'react-native';
import React from 'react';
import {aliceInWonderLand} from '../../../Utils/BookPubs';
import {Reader, ReaderProvider} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';

const BookList = () => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ReaderProvider>
        <Reader
        //   src={aliceInWonderLand}
        // src='src/Assets/PubFiles/carroll-alice-in-wonderland-illustrations.epub'
        src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          width={width}
          height={height}
          fileSystem={useFileSystem}
        />
      </ReaderProvider>
    </SafeAreaView>
  );
};

export default BookList;
