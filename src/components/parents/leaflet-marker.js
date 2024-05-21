import React, { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

export default function MapMarker({
  data,
  isActive,
  markerClick,
  index,
  map,
  el,
  clickHandler,
}) {
  let popupRef = useRef();

  useEffect(() => {
    if (isActive && popupRef?.current) {
      popupRef.current.openOn(map.current);
    }
  }, [isActive, map, popupRef]);

  if (isNaN(data.lat) || isNaN(data.lng)) {
    console.log(data.title + " has wrong coordinates");
    return;
  }

  let icon;

  if (typeof window !== "undefined") {
    icon = new L.DivIcon({
      iconAnchor: [53, 36],
      iconUrl: "data:image/svg+xml;base64," + btoa(data.flag),
      iconRetinaUrl: "data:image/svg+xml;base64," + btoa(data.flag),
      className: "",
      html: `${data.flag} <p>${data.title}</p>`,
    });
  }

  return (
    <Marker
      icon={icon}
      position={[data.lat, data.lng]}
      eventHandlers={{
        click: () => {
          clickHandler(data.id);
        },
      }}
    >
      <Popup
        autoPan={false}
        closeOnClick={false}
        closeOnEscapeKey={false}
        ref={popupRef}
      >
        <div className="flex">
          <span dangerouslySetInnerHTML={{ __html: data.flag }} /> {data.title}
        </div>
        <div className="list">
          {data.address && (
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
              {data.address}
            </div>
          )}
          {data.phone?.map((el) => (
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
              {el}
            </div>
          ))}
          {data.email && (
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
              {data.email}
            </div>
          )}
        </div>
      </Popup>
    </Marker>
  );
}
