import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabItem from '../TabItem/TabItem';

const Home = () => {
  const galleryItems = useLoaderData();
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json())
      .then(data => setAllToys(data));
  }, []);

  const SportsCar = allToys.filter(toy => toy.sub_category === 'Sports Cars');
  const PoliceVehicles = allToys.filter(
    toy => toy.sub_category === 'Police Vehicles'
  );
  const MonsterTrucks = allToys.filter(
    toy => toy.sub_category === 'Monster Trucks'
  );
  return (
    <div className="">
      <Banner></Banner>
      <h1 className="my-8 text-center text-5xl">Gallery</h1>
      <div className="my-8 grid md:grid-cols-3 gap-4 p-4 ">
        {galleryItems.map(item => (
          <Gallery key={item._id} item={item}></Gallery>
        ))}
      </div>
      <h1 className="my-8 text-center text-5xl">Shop by category</h1>
      <div className="my-8">
        <Tabs>
          <TabList>
            <Tab>Sports Cars</Tab>
            <Tab>Police Vehicles</Tab>
            <Tab>Monster Trucks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 ">
              {SportsCar.map(car => (
                <TabItem key={car._id} car={car}></TabItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 ">
              {PoliceVehicles.map(car => (
                <TabItem key={car._id} car={car}></TabItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 ">
              {MonsterTrucks.map(car => (
                <TabItem key={car._id} car={car}></TabItem>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
