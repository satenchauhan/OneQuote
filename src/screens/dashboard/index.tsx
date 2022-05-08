import React, {useContext} from 'react';
import {View, StatusBar} from 'react-native';
import {
  homeHeaderTabItems,
  homeCenterTabItems,
  FloatButton,
  HomeHeaderTab,
  HomeCenterTab,
  HorizontalLine,
} from '../../components';
import {
  HOME_CENTER,
  HOME_CENTER_TABS,
  HOME_CONTAINER,
  HOME_HEADER,
  SPACE,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {QuoteChartView} from './QuoteChartView';
import {InvoiceChartView} from './InvoiceChartView';
import {ProjectChartView} from './ProjectChartView';
import {
  ActiveProject,
  AddUsers,
  CompanyFeed,
  FooterContainer,
  MyTask,
  PhotoSection,
  RecentQuotes,
  Screen,
} from '../../container';
import {GlobalContext} from '../../context';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {tabKey, setTabKey}: any = useContext(GlobalContext);

  const showDonutChart = () => {
    if (tabKey == 1) {
      return <QuoteChartView />;
    } else if (tabKey == 2) {
      return <InvoiceChartView />;
    } else {
      return <ProjectChartView />;
    }
  };

  const add = () => {
    console.log('add item');
  };
  const addDoc = () => {
    console.log('add doc');
  };

  React.useEffect(() => {
    console.log('Home');
  }, []);
  return (
    <>
      <Screen preset="scroll">
        <View style={HOME_CONTAINER}>
          <StatusBar backgroundColor="gray" barStyle="light-content" />
          <View style={HOME_HEADER}>
            {homeHeaderTabItems.map((item, x) => (
              <HomeHeaderTab key={x} item={item} />
            ))}
          </View>
          <View style={HOME_CENTER}>
            <View style={HOME_CENTER_TABS}>
              {homeCenterTabItems.map((item, x) => (
                <HomeCenterTab key={x} item={item} />
              ))}
            </View>
            {showDonutChart()}
            <ActiveProject />
            <RecentQuotes />
            <PhotoSection />
            <MyTask />
            <CompanyFeed />
            <AddUsers />
            <View style={SPACE}>
              <HorizontalLine style={{}} />
            </View>
            <FooterContainer />
          </View>
        </View>
      </Screen>
      <FloatButton add={add} addDoc={addDoc} />
    </>
  );
};
