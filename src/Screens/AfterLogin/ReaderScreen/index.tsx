import React from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import {
  Reader,
  ReaderProvider,
  useReader,
  Location,
} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';
import {setItem, getItem} from '../../../Services/Cookie';

const ReaderScreen = () => {
  const {width, height} = useWindowDimensions();

  const FetchData = () => {
    const {goToLocation, getLocations, getMeta, currentLocation, addMark} = useReader();
    const Test = async () => {
      let storedPageCfi = await getItem('currentPageCfi');
      console.log('goToLocation:::');
      goToLocation(storedPageCfi as string);
      console.log('currentLocation:::', currentLocation);

      let storedText = await getItem('selectedText');
      console.log("🚀 ~ file: index.tsx:25 ~ Test ~ storedText:", storedText)


      addMark('highlight', storedText as string)
    };

    return (
      <Reader
        src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
        width={width}
        height={height}
        fileSystem={useFileSystem}
        onReady={Test}
        onLocationChange={(totalLocations, loc, progress) => {
          const currentLocation = loc as unknown as Location;
          if (
            currentLocation &&
            currentLocation.start &&
            currentLocation.start.displayed
          ) {
            const currentPageCfi = currentLocation.start.cfi;
            console.log(
              '🚀 ~ file: index.tsx:48 ~ FetchData ~ currentPageCfi:',
              currentPageCfi,
            );
            setItem('currentPageCfi', currentPageCfi);
          }
        }}
        onSelected={(text, cfi) => {
          console.log('Selected text::', text);
          handleSelected(cfi);
        }}
      />
    );
  };

  const handleSelected = async (text: string) => {
    console.log('Selected text::', text);
    setItem('selectedText', text); // Store selected text
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ReaderProvider>
        <FetchData />
      </ReaderProvider>
    </SafeAreaView>
  );
};

export default ReaderScreen;
