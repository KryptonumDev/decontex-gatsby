import React, { useRef, useState } from "react";
import { Container } from "../../styles/style";
import styled from "styled-components";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import countries from "./../../resources/countries.json";
import MapMarker from "./leaflet-marker";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import x from "./../../resources/x.svg";

export default function LeafletMap() {
  const [activeDot, setActiveDot] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const map = useRef();

  const countryList = [
    {
      name: "Europe",
      instances: [
        {
          id: "POL",
          title: "Poland",
          email: "mzi@decontex.com",
          phone: "+48 726 411 811",
          address: "Decontex Poland Sp.z.o.o , Warsaw",
          lat: 52.22977,
          lng: 21.01178,
          flag: `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3644_75694)">
                <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
                <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" fill="#D80027"/>
              </g>
              <defs>
                <clipPath id="clip0_3644_75694">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
        {
          id: "DEU",
          title: "Deutchland",
          email: "",
          phone: "+49 176 354 000 00",
          address: "Decontex Germany GmbH, Berlin",
          lat: 52.520008,
          lng: 13.404954,
          flag: `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3682_11151)">
                <path d="M0.621094 13.4789C2.03402 17.2869 5.69945 20.0007 9.9991 20.0007C14.2987 20.0007 17.9642 17.2869 19.3771 13.4789L9.9991 12.6094L0.621094 13.4789Z" fill="#FFDA44"/>
                <path d="M9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52176L9.9991 7.39129L19.3771 6.52172C17.9642 2.71375 14.2987 0 9.9991 0Z" fill="black"/>
                <path d="M0.621992 6.52148C0.220039 7.6048 0 8.77652 0 9.99973C0 11.2229 0.220039 12.3946 0.621992 13.478H19.378C19.78 12.3946 20 11.2229 20 9.99973C20 8.77652 19.78 7.6048 19.378 6.52148H0.621992Z" fill="#D80027"/>
              </g>
              <defs>
                <clipPath id="clip0_3682_11151">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
      ],
    },
    {
      name: "America",
      instances: [
        {
          id: "USA",
          title: "United States",
          email: "",
          phone: "+1 202 555 0100",
          address: "Decontex USA LLC, Washington",
          lat: 38.89511,
          lng: -77.03637,
          flag: `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3645_10378)">
                <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
                <path d="M9.56641 9.99934H20.0012C20.0012 9.09676 19.8809 8.22238 19.6567 7.39062H9.56641V9.99934Z" fill="#D80027"/>
                <path d="M9.56641 4.78254H18.5334C17.9213 3.78363 17.1386 2.9007 16.226 2.17383H9.56641V4.78254Z" fill="#D80027"/>
                <path d="M9.99828 20.0001C12.3518 20.0001 14.5149 19.1866 16.2231 17.8262H3.77344C5.48164 19.1866 7.6448 20.0001 9.99828 20.0001Z" fill="#D80027"/>
                <path d="M1.46699 15.2181H18.5315C19.023 14.4162 19.4041 13.5396 19.6548 12.6094H0.34375C0.594414 13.5396 0.975547 14.4162 1.46699 15.2181Z" fill="#D80027"/>
                <path d="M4.63219 1.56164H5.54348L4.69582 2.17746L5.01961 3.17391L4.17199 2.55809L3.32437 3.17391L3.60406 2.31309C2.85773 2.93477 2.20359 3.66313 1.66453 4.47469H1.95652L1.41695 4.86668C1.33289 5.00691 1.25227 5.14937 1.175 5.29395L1.43266 6.08695L0.951953 5.7377C0.832461 5.99086 0.723164 6.24973 0.624922 6.51398L0.908789 7.38773H1.95652L1.10887 8.00356L1.43266 9L0.585039 8.38418L0.0773047 8.75309C0.0264844 9.1616 0 9.57769 0 10H10C10 4.47719 10 3.82609 10 0C8.02453 0 6.18301 0.573047 4.63219 1.56164ZM5.01961 9L4.17199 8.38418L3.32437 9L3.64816 8.00356L2.80051 7.38773H3.84824L4.17199 6.39129L4.49574 7.38773H5.54348L4.69582 8.00356L5.01961 9ZM4.69582 5.09051L5.01961 6.08695L4.17199 5.47113L3.32437 6.08695L3.64816 5.09051L2.80051 4.47469H3.84824L4.17199 3.47824L4.49574 4.47469H5.54348L4.69582 5.09051ZM8.60656 9L7.75895 8.38418L6.91133 9L7.23512 8.00356L6.38746 7.38773H7.4352L7.75895 6.39129L8.0827 7.38773H9.13043L8.28277 8.00356L8.60656 9ZM8.28277 5.09051L8.60656 6.08695L7.75895 5.47113L6.91133 6.08695L7.23512 5.09051L6.38746 4.47469H7.4352L7.75895 3.47824L8.0827 4.47469H9.13043L8.28277 5.09051ZM8.28277 2.17746L8.60656 3.17391L7.75895 2.55809L6.91133 3.17391L7.23512 2.17746L6.38746 1.56164H7.4352L7.75895 0.565195L8.0827 1.56164H9.13043L8.28277 2.17746Z" fill="#0052B4"/>
              </g>
              <defs>
                <clipPath id="clip0_3645_10378">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
      ],
    },
  ];

  let filteredCountries = {
    type: "FeatureCollection",
    features: countries.features.filter((country) => {
      return countryList.some((el) => {
        return el.instances.some((instance) => {
          return instance.id === country.id;
        });
      });
    }),
  };

  const markerClick = (index) => {
    setActiveDot(index);
    // const offset = document.getElementById('map-item-' + index).offsetTop
    // document.getElementById('map-content').scrollTo(0, offset)
  };

  return (
    <Wrapper>
      <MapWrapper>
        <SideBar className={isSidebarOpen ? "open" : ""}>
          <div className="flex">
            <h3>Decontex centers</h3>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="arrow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.56944 4.51191C9.29988 4.19741 8.8264 4.16099 8.51191 4.43056C8.19741 4.70012 8.16099 5.1736 8.43056 5.48809L9.56944 4.51191ZM15 12L15.5694 12.4881C15.8102 12.2072 15.8102 11.7928 15.5694 11.5119L15 12ZM8.43056 18.5119C8.16099 18.8264 8.19741 19.2999 8.51191 19.5694C8.8264 19.839 9.29988 19.8026 9.56944 19.4881L8.43056 18.5119ZM8.43056 5.48809L14.4306 12.4881L15.5694 11.5119L9.56944 4.51191L8.43056 5.48809ZM14.4306 11.5119L8.43056 18.5119L9.56944 19.4881L15.5694 12.4881L14.4306 11.5119Z"
                  fill="#F3F3F3"
                />
              </svg>
            </button>
          </div>
          <div className="country-list">
            {countryList.map((el, index) => (
              <div>
                <h4>{el.name}</h4>
                <div className="list" key={index}>
                  {el.instances.map((instance, i) => (
                    <button className="item" key={i}>
                      <div className="item-flex">
                        <span
                          dangerouslySetInnerHTML={{ __html: instance.flag }}
                        />
                        <p>{instance.title}</p>
                      </div>
                      <div className="links">
                        {instance.address && (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M9.75 14.55C11.4833 13.15 12.7917 11.8042 13.675 10.5125C14.5583 9.22083 15 8.01667 15 6.9C15 5.91667 14.8208 5.08333 14.4625 4.4C14.1042 3.71667 13.6625 3.15833 13.1375 2.725C12.6125 2.29167 12.0417 1.97917 11.425 1.7875C10.8083 1.59583 10.25 1.5 9.75 1.5C9.25 1.5 8.69167 1.59583 8.075 1.7875C7.45833 1.97917 6.8875 2.29167 6.3625 2.725C5.8375 3.15833 5.39583 3.71667 5.0375 4.4C4.67917 5.08333 4.5 5.91667 4.5 6.9C4.5 8.01667 4.94167 9.22083 5.825 10.5125C6.70833 11.8042 8.01667 13.15 9.75 14.55ZM9.75 16.45C7.46667 14.7333 5.77083 13.0917 4.6625 11.525C3.55417 9.95833 3 8.41667 3 6.9C3 5.76667 3.20417 4.77083 3.6125 3.9125C4.02083 3.05417 4.55 2.33333 5.2 1.75C5.85 1.16667 6.575 0.729167 7.375 0.4375C8.175 0.145833 8.96667 0 9.75 0C10.5333 0 11.325 0.145833 12.125 0.4375C12.925 0.729167 13.65 1.16667 14.3 1.75C14.95 2.33333 15.4792 3.05417 15.8875 3.9125C16.2958 4.77083 16.5 5.76667 16.5 6.9C16.5 8.41667 15.9458 9.95833 14.8375 11.525C13.7292 13.0917 12.0333 14.7333 9.75 16.45ZM9.75 8.5C10.2333 8.5 10.6458 8.32917 10.9875 7.9875C11.3292 7.64583 11.5 7.23333 11.5 6.75C11.5 6.26667 11.3292 5.85417 10.9875 5.5125C10.6458 5.17083 10.2333 5 9.75 5C9.26667 5 8.85417 5.17083 8.5125 5.5125C8.17083 5.85417 8 6.26667 8 6.75C8 7.23333 8.17083 7.64583 8.5125 7.9875C8.85417 8.32917 9.26667 8.5 9.75 8.5ZM3 20V18.5H16.5V20H3Z"
                                fill="#F3F3F3"
                              />
                            </svg>{" "}
                            {instance.address}
                          </div>
                        )}
                        {instance.phone && (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M17 18C15.1926 18 13.3963 17.5556 11.6111 16.6667C9.82593 15.7778 8.22222 14.6222 6.8 13.2C5.37778 11.7778 4.22222 10.1741 3.33333 8.38889C2.44444 6.6037 2 4.80741 2 3C2 2.71852 2.0963 2.48148 2.28889 2.28889C2.48148 2.0963 2.71852 2 3 2H6.11111C6.31852 2 6.5 2.07037 6.65556 2.21111C6.81111 2.35185 6.91111 2.54074 6.95556 2.77778L7.55556 5.57778C7.58519 5.78519 7.58148 5.97407 7.54444 6.14444C7.50741 6.31481 7.42963 6.45926 7.31111 6.57778L5.08889 8.82222C5.91852 10.2 6.84815 11.4 7.87778 12.4222C8.90741 13.4444 10.0741 14.3111 11.3778 15.0222L13.4889 12.8444C13.637 12.6815 13.8074 12.5667 14 12.5C14.1926 12.4333 14.3852 12.4222 14.5778 12.4667L17.2222 13.0444C17.4444 13.0889 17.6296 13.2 17.7778 13.3778C17.9259 13.5556 18 13.763 18 14V17C18 17.2815 17.9037 17.5185 17.7111 17.7111C17.5185 17.9037 17.2815 18 17 18ZM4.42222 7.6L6.22222 5.77778L5.71111 3.33333H3.33333C3.33333 3.91111 3.42222 4.54444 3.6 5.23333C3.77778 5.92222 4.05185 6.71111 4.42222 7.6ZM16.6667 16.6667V14.2889L14.3778 13.8222L12.6222 15.6667C13.2296 15.9481 13.8889 16.1778 14.6 16.3556C15.3111 16.5333 16 16.637 16.6667 16.6667Z"
                                fill="#ECECEC"
                              />
                            </svg>{" "}
                            {instance.phone}
                          </div>
                        )}
                        {instance.email && (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M10 19C8.755 19 7.585 18.7638 6.49 18.2912C5.395 17.8187 4.4425 17.1775 3.6325 16.3675C2.8225 15.5575 2.18125 14.605 1.70875 13.51C1.23625 12.415 1 11.245 1 10C1 8.755 1.23625 7.585 1.70875 6.49C2.18125 5.395 2.8225 4.4425 3.6325 3.6325C4.4425 2.8225 5.395 2.18125 6.49 1.70875C7.585 1.23625 8.755 1 10 1C11.245 1 12.415 1.23625 13.51 1.70875C14.605 2.18125 15.5575 2.8225 16.3675 3.6325C17.1775 4.4425 17.8187 5.395 18.2912 6.49C18.7638 7.585 19 8.755 19 10V11.1925C19 12.0325 18.7038 12.7413 18.1112 13.3187C17.5188 13.8962 16.795 14.185 15.94 14.185C15.4 14.185 14.89 14.0537 14.41 13.7912C13.93 13.5287 13.5625 13.1575 13.3075 12.6775C12.9175 13.1875 12.43 13.5662 11.845 13.8137C11.26 14.0612 10.645 14.185 10 14.185C8.83 14.185 7.83625 13.78 7.01875 12.97C6.20125 12.16 5.7925 11.17 5.7925 10C5.7925 8.83 6.20125 7.8325 7.01875 7.0075C7.83625 6.1825 8.83 5.77 10 5.77C11.17 5.77 12.1637 6.1825 12.9812 7.0075C13.7987 7.8325 14.2075 8.83 14.2075 10V11.1925C14.2075 11.6575 14.3762 12.0475 14.7137 12.3625C15.0512 12.6775 15.46 12.835 15.94 12.835C16.405 12.835 16.8062 12.6775 17.1437 12.3625C17.4812 12.0475 17.65 11.6575 17.65 11.1925V10C17.65 7.87 16.9075 6.0625 15.4225 4.5775C13.9375 3.0925 12.13 2.35 10 2.35C7.87 2.35 6.0625 3.0925 4.5775 4.5775C3.0925 6.0625 2.35 7.87 2.35 10C2.35 12.13 3.0925 13.9375 4.5775 15.4225C6.0625 16.9075 7.87 17.65 10 17.65H14.815V19H10ZM10 12.835C10.795 12.835 11.47 12.5612 12.025 12.0138C12.58 11.4662 12.8575 10.795 12.8575 10C12.8575 9.19 12.58 8.5075 12.025 7.9525C11.47 7.3975 10.795 7.12 10 7.12C9.205 7.12 8.53 7.3975 7.975 7.9525C7.42 8.5075 7.1425 9.19 7.1425 10C7.1425 10.795 7.42 11.4662 7.975 12.0138C8.53 12.5612 9.205 12.835 10 12.835Z"
                                fill="#ECECEC"
                              />
                            </svg>{" "}
                            {instance.email}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SideBar>
        <MapContainer
          center={[36.505, -29.09]}
          zoom={3}
          minZoom={2}
          maxZoom={6}
          scrollWheelZoom={false}
          whenCreated={(mapInstance) => {
            map.current = mapInstance;
          }}
        >
          <TileLayer
            subdomains="abcd"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          />
          <GeoJSON data={filteredCountries} style={{ color: "#53A4DB" }} />
          <MarkerClusterGroup chunkedLoading>
            {filteredCountries.features?.map((el, index) => (
              <MapMarker
                key={el.id}
                isActive={activeDot === index}
                map={map}
                data={countryList
                  .find((country) => {
                    return country.instances.some((instance) => {
                      return instance.id === el.id;
                    });
                  })
                  .instances.find((instance) => {
                    return instance.id === el.id;
                  })}
                el={el}
                index={index}
                markerClick={markerClick}
              />
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </MapWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: clamp(128px, calc(128vw / 7.68), 256px) auto 0;

  .leaflet-container {
    height: 1024px;
    max-height: calc(100vh - 103px);
    z-index: 0;
    background: #262626;

    @media (max-width: 480px) {
      height: 100%;
    }

    a {
      font-size: 14px;
      font-weight: 400;
      text-transform: none;
    }

    path.leaflet-interactive {
      fill: var(--Blue-500, #53a4db);
      fill-opacity: 1 !important;
      stroke: var(--Gray-500, #c4c4c4);
    }
  }

  .leaflet-left {
    bottom: 0;
    right: 0;
    left: unset;
    top: unset;

    .leaflet-control-zoom {
      margin: 0 10px 10px 0;
    }
  }

  .leaflet-control-attribution {
    display: none;
  }

  .marker-cluster {
    background-color: #0864a6 !important;
    display: block !important;
    padding: 0 !important;

    &::before {
      display: none;
    }

    &::after {
      display: none;
    }

    > div {
      background-color: transparent;
      margin: 0 !important;
      width: 44px !important;
      height: 44px !important;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  .leaflet-marker-icon {
    background-color: #0864a6 !important;
    display: grid;
    grid-template-columns: 20px auto;
    gap: 8px;
    align-items: center;
    padding: 4px;

    width: fit-content !important;
    height: auto !important;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      background-color: #0864a6;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      left: 32px;
      bottom: -13px;
    }

    &::after {
      content: "";
      position: absolute;
      background-color: #0864a6;
      width: 1px;
      height: 10px;
      left: 34px;
      bottom: -10px;
    }

    p {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      white-space: nowrap;
    }
  }

  .leaflet-popup {
    border: 2px solid var(--Blue-500, #53a4db);
    background: var(--Black-700, #111315);
    padding: 16px 16px 20px 16px;

    margin-bottom: 0;
    min-width: 380px;

    .leaflet-popup-content-wrapper {
      color: #fff;
      background-color: transparent;
      box-shadow: unset;
    }

    .leaflet-popup-tip-container {
      display: none;
    }

    .leaflet-popup-close-button {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: url(${x});
      }

      span {
        display: none;
      }
    }

    .flex {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;

      span {
        display: block;
        width: 20px;
        height: 20px;
      }
    }

    .list {
      display: grid;
      gap: 12px;

      > div {
        display: grid;
        align-items: center;
        grid-template-columns: 20px auto;
        gap: 12px;
        color: #fff;
        font-size: 14px;
      }
    }

    .leaflet-popup-content {
      margin: 0 !important;
    }
  }
`;

const MapWrapper = styled.div`
  position: relative;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;

    height: calc(100vh - 103px);
  }
`;

const SideBar = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  top: 0;
  background: var(--Black-300, #33383d);
  padding: 32px 18px;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 480px) {
    position: relative;
    max-height: 50%;
  }

  &.open {
    .flex {
      h3 {
        display: block;
      }

      svg {
        transform: rotateZ(180deg);
      }
    }

    h4 {
      display: block;
      font-size: clamp(19px, calc(19vw / 7.68), 20px);
      margin-bottom: clamp(8px, calc(16vw / 7.68), 20px);
    }

    .item {
      background: var(--Black-700, #111315);
      padding: 16px 16px 20px 16px;
      width: 100%;

      .item-flex {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: clamp(12px, calc(20vw / 7.68), 20px);

        span {
          padding: 0;
        }

        p {
          display: block;
          color: #fff;
          text-transform: none;
          font-size: clamp(13px, calc(19vw / 7.68), 20px);
          font-weight: 600;
          line-height: 160%;
        }
      }

      .links {
        display: grid;
        gap: 12px;

        > div {
          display: grid;
          align-items: center;
          grid-template-columns: 20px auto;
          gap: clamp(6px, calc(8vw / 7.68), 12px);
          color: #fff;
          font-size: clamp(12px, calc(14vw / 7.68), 14px);
          font-weight: 400;
          text-align: left;
          text-transform: none;
        }
      }
    }
  }

  .country-list {
    overflow: auto;
    display: grid;
    gap: 32px;
  }

  .item {
    border: none;
    background-color: transparent;
    margin: 0;
    box-shadow: unset;

    .item-flex {
      p {
        display: none;
      }
    }

    span {
      display: block;
      padding: 10px;

      svg {
        display: block;
      }
    }

    .links {
      display: none;
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    h3 {
      color: #fff;
      display: none;
    }

    svg {
      display: block;
    }
  }

  h4 {
    color: #fff;
    margin-bottom: 1px;
    display: none;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 600;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .arrow {
    padding: 10px;
    background-color: transparent;
    margin: 0;
    border: none;
    box-shadow: unset;
  }
`;
