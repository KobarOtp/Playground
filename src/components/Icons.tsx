export default function Iconos({ icono }: { icono: string }) {
  const icons = {
    carrito: () => {
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.96373 7.72913L6.18556 4.22913H3.93506"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.01953 17.3075L6.96387 7.72913H21.7315C22.4747 7.72913 23.0277 8.41396 22.8725 9.14079L21.1202 17.3075C21.0047 17.8453 20.5299 18.2291 19.9792 18.2291H10.1594C9.60987 18.2291 9.13503 17.8453 9.01953 17.3075Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.3756 22.4584C20.1341 22.4584 19.9381 22.6544 19.9405 22.8959C19.9405 23.1374 20.1365 23.3334 20.378 23.3334C20.6195 23.3334 20.8155 23.1374 20.8155 22.8959C20.8143 22.6544 20.6183 22.4584 20.3756 22.4584Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3322 22.4584C10.0907 22.4584 9.89466 22.6544 9.89699 22.8959C9.89583 23.1374 10.0918 23.3334 10.3333 23.3334C10.5748 23.3334 10.7708 23.1374 10.7708 22.8959C10.7708 22.6544 10.5748 22.4584 10.3322 22.4584Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    inicio: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 21V15C15 14.4696 14.7893 13.9609 14.4142 13.5858C14.0391 13.2107 13.5304 13 13 13H11C10.4696 13 9.96086 13.2107 9.58579 13.5858C9.21071 13.9609 9 14.4696 9 15V21"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18V10.9597C3 10.2849 3.15179 9.61863 3.44413 9.01038C3.73647 8.40212 4.16187 7.8674 4.68885 7.44582L8.8765 4.09568C9.76307 3.38641 10.8646 3 12 3C13.1354 3 14.2369 3.38641 15.1235 4.09568L19.3111 7.44581C19.8381 7.86739 20.2635 8.40211 20.5559 9.01036C20.8482 9.61862 21 10.2848 21 10.9597V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7957 3 18Z"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    espera: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C13.78 3 15.5201 3.52784 17.0001 4.51677C18.4802 5.50571 19.6337 6.91131 20.3149 8.55585C20.9961 10.2004 21.1743 12.01 20.8271 13.7558C20.4798 15.5016 19.6226 17.1053 18.364 18.364C17.1053 19.6226 15.5016 20.4798 13.7558 20.8271C12.01 21.1743 10.2004 20.9961 8.55585 20.3149C6.91131 19.6337 5.50571 18.4802 4.51677 17.0001C3.52784 15.5201 3 13.78 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3Z"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 7V12.5H8"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    cartera: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12H4C2.89543 12 2 12.8954 2 14V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V14C22 12.8954 21.1046 12 20 12Z"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 15H14"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 12V7.45C20 6.91957 19.7893 6.41086 19.4142 6.03579C19.0391 5.66071 18.5304 5.45 18 5.45H13.0291C12.8661 5.45 12.7055 5.41014 12.5614 5.33389C12.4173 5.25764 12.2941 5.14732 12.2024 5.01253L11.1307 3.43747C11.039 3.30268 10.9157 3.19236 10.7716 3.11611C10.6275 3.03986 10.467 3 10.3039 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V12"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    historial: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_78_1004)">
            <path
              d="M15 15V16C15 16.2652 14.8946 16.5196 14.7071 16.7071C14.5196 16.8946 14.2652 17 14 17H10C9.73478 17 9.48043 16.8946 9.29289 16.7071C9.10536 16.5196 9 16.2652 9 16V15"
              stroke="#969EAE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 13.1742V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V13.1742C21 12.3956 20.8863 11.6211 20.6626 10.8754L18.7276 4.4253C18.604 4.01332 18.3509 3.65216 18.0058 3.39541C17.6607 3.13866 17.2421 3 16.8119 3H7.18806C6.75794 3 6.33928 3.13866 5.9942 3.39541C5.64912 3.65216 5.396 4.01332 5.27241 4.4253L3.33741 10.8754C3.11367 11.6211 3.00001 12.3956 3 13.1742Z"
              stroke="#969EAE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9127 12H3.0874"
              stroke="#969EAE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5 6H8.5"
              stroke="#969EAE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 9H7.5"
              stroke="#969EAE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_78_1004">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    logo: () => {
      return (
        <svg
          width="27"
          height="25"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.54572 0C2.03506 0 0 2.03506 0 4.54572C0 7.05638 2.03506 9.09144 4.54572 9.09144C7.05638 9.09144 9.09144 7.05638 9.09144 4.54572C9.09071 2.03506 7.05565 0 4.54572 0Z"
            fill="orange"
          />
          <path
            d="M7.95483 21.591V11.3635H4.5459V18.1814C4.5459 20.0649 6.07201 21.591 7.95483 21.591Z"
            fill="white"
          />
          <path
            d="M17.6136 4.54578C12.907 4.54578 9.09131 8.36142 9.09131 13.0681V25.0001H12.5002V13.0688H12.4981C12.4988 10.2442 14.7883 7.95543 17.6129 7.95543C20.4375 7.95543 22.7277 10.2457 22.7277 13.0703C22.7277 15.8948 20.4375 18.1851 17.6129 18.1851H13.637V21.5919H17.6143C22.321 21.5919 26.1374 17.7762 26.1374 13.0688C26.1359 8.36142 22.3203 4.54578 17.6136 4.54578Z"
            fill="white"
          />
        </svg>
      );
    },
    tienda: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 7V6.5C8.5 5.57174 8.86875 4.6815 9.52513 4.02513C10.1815 3.36875 11.0717 3 12 3C12.9283 3 13.8185 3.36875 14.4749 4.02513C15.1313 4.6815 15.5 5.57174 15.5 6.5V7"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.46381 7C5.95499 7.00001 5.4653 7.19397 5.09445 7.54236C4.72361 7.89076 4.4995 8.3674 4.46776 8.87524L4.00876 16.2193C3.97043 16.8327 4.05814 17.4474 4.26651 18.0256C4.47487 18.6038 4.79946 19.1332 5.22026 19.5811C5.64106 20.0291 6.14916 20.386 6.71322 20.6301C7.27729 20.8741 7.88536 21 8.49994 21H15.4996C16.1142 21 16.7223 20.8741 17.2863 20.6301C17.8504 20.3861 18.3585 20.0291 18.7793 19.5811C19.2001 19.1332 19.5247 18.6038 19.7331 18.0256C19.9414 17.4474 20.0292 16.8327 19.9908 16.2193L19.5318 8.87524C19.5001 8.3674 19.276 7.89076 18.9051 7.54236C18.5343 7.19396 18.0446 7.00001 17.5358 7H6.46381Z"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    lupa: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0002 20.0001L16.3765 16.3763"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 11.25C4 12.6839 4.4252 14.0856 5.22185 15.2779C6.01849 16.4701 7.15078 17.3994 8.47554 17.9481C9.80031 18.4969 11.258 18.6404 12.6644 18.3607C14.0708 18.081 15.3626 17.3905 16.3765 16.3765C17.3905 15.3626 18.081 14.0708 18.3607 12.6644C18.6404 11.258 18.4969 9.80031 17.9481 8.47554C17.3994 7.15078 16.4701 6.01849 15.2779 5.22185C14.0856 4.4252 12.6839 4 11.25 4C9.32722 4.00014 7.48324 4.76402 6.12363 6.12363C4.76402 7.48324 4.00014 9.32722 4 11.25Z"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    filtro: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 13.5L19.707 8.293C19.895 8.105 20 7.851 20 7.586V5C20 4.448 19.552 4 19 4H5C4.448 4 4 4.448 4 5V7.586C4 7.851 4.105 8.106 4.293 8.293L9.5 13.5"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 13.5V19.749C9.5 20.562 10.264 21.159 11.053 20.962L13.553 20.337C14.109 20.198 14.5 19.698 14.5 19.124V13.5"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    promociones: () => {
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.07761 15.7081L5.47761 17.5327L5.77861 19.8042C5.85932 20.4163 6.13916 20.9848 6.57496 21.4221C7.01077 21.8593 7.57832 22.1411 8.19011 22.2239L10.4674 22.5284L12.2909 23.9167C12.7815 24.2919 13.3819 24.4951 13.9995 24.4951C14.6171 24.4951 15.2175 24.2919 15.7081 23.9167L17.5328 22.5226L19.8054 22.2216C20.4184 22.1405 20.9875 21.8599 21.4249 21.4229C21.8623 20.9859 22.1435 20.4171 22.2251 19.8042L22.5284 17.5269C22.5284 17.5269 23.2284 16.6052 23.9226 15.7034C24.2976 15.2127 24.5007 14.6123 24.5007 13.9948C24.5007 13.3773 24.2976 12.7769 23.9226 12.2862L22.5284 10.4662L22.2274 8.19472C22.1464 7.5818 21.8657 7.01264 21.4288 6.57527C20.9918 6.13789 20.4229 5.85665 19.8101 5.77505L17.5316 5.47172L15.7081 4.08339C15.2175 3.70825 14.6171 3.505 13.9995 3.505C13.3819 3.505 12.7815 3.70825 12.2909 4.08339L10.4663 5.47172L8.19361 5.77389C7.58111 5.85537 7.01249 6.13626 6.57557 6.57318C6.13865 7.0101 5.85776 7.57872 5.77628 8.19122L5.47177 10.4686C5.47177 10.4686 4.77177 11.3902 4.07177 12.2921C3.69711 12.7826 3.49414 13.3828 3.49414 14.0001C3.49414 14.6173 3.69711 15.2175 4.07177 15.7081H4.07761Z"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5498 16.4501L16.4498 11.55"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.6706 16.2785C16.7098 16.3177 16.7366 16.3676 16.7474 16.4219C16.7583 16.4762 16.7528 16.5326 16.7316 16.5838C16.7104 16.635 16.6746 16.6787 16.6285 16.7095C16.5824 16.7403 16.5283 16.7568 16.4729 16.7568C16.4175 16.7568 16.3633 16.7403 16.3172 16.7095C16.2712 16.6787 16.2353 16.635 16.2141 16.5838C16.1929 16.5326 16.1874 16.4762 16.1983 16.4219C16.2092 16.3676 16.2359 16.3177 16.2751 16.2785C16.301 16.2525 16.3318 16.2318 16.3658 16.2177C16.3997 16.2036 16.4361 16.1963 16.4729 16.1963C16.5096 16.1963 16.546 16.2036 16.58 16.2177C16.6139 16.2318 16.6447 16.2525 16.6706 16.2785Z"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.7238 11.326C11.7631 11.3652 11.7898 11.4151 11.8007 11.4694C11.8115 11.5237 11.806 11.5801 11.7848 11.6313C11.7637 11.6825 11.7278 11.7262 11.6817 11.757C11.6357 11.7878 11.5815 11.8043 11.5261 11.8043C11.4707 11.8043 11.4165 11.7878 11.3705 11.757C11.3244 11.7262 11.2885 11.6825 11.2673 11.6313C11.2462 11.5801 11.2407 11.5237 11.2515 11.4694C11.2624 11.4151 11.2891 11.3652 11.3283 11.326C11.3543 11.3 11.3851 11.2793 11.419 11.2652C11.4529 11.251 11.4893 11.2438 11.5261 11.2438C11.5629 11.2438 11.5992 11.251 11.6332 11.2652C11.6671 11.2793 11.6979 11.3 11.7238 11.326Z"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    nuevos: () => {
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_118_2255)">
            <path
              d="M8.16667 11.0834V16.9167L3.5 11.0834V11.088V16.9167"
              stroke="#007AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6665 14H15.1665"
              stroke="#007AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.7498 11.088H11.6665V16.9167H15.7498"
              stroke="#007AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.6665 11.0834L19.2498 16.9167H19.4995L21.5832 13.4167L23.6668 16.9167H23.9165L24.4998 11.0834"
              stroke="#007AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.2973 7.58338C22.029 7.23455 21.7443 6.89505 21.4246 6.57538C17.3238 2.47455 10.6761 2.47455 6.5753 6.57538C6.25564 6.89505 5.97214 7.23455 5.70264 7.58338"
              stroke="#007AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.70264 20.4166C5.97097 20.7655 6.25564 21.105 6.5753 21.4246C10.6761 25.5255 17.3238 25.5255 21.4246 21.4246C21.7443 21.105 22.0278 20.7655 22.2973 20.4166"
              stroke="#007AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_118_2255">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    download: () => {
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.37816 10.5794C4.53266 10.9679 2.3335 13.3817 2.3335 16.3334C2.3335 19.5545 4.94566 22.1667 8.16683 22.1667H21.0002C23.5773 22.1667 25.6668 20.0772 25.6668 17.5C25.6668 14.9229 23.5773 12.8334 21.0002 12.8334C21.0002 8.96704 17.8665 5.83337 14.0002 5.83337C10.9237 5.83337 8.31733 7.82021 7.37816 10.5794Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5285 15.5552L14.0003 18.0833L11.4722 15.5552"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 12.25V18.0833"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    opciones: () => {
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5837 14C21.5837 14.3222 21.3225 14.5833 21.0003 14.5833C20.6782 14.5833 20.417 14.3222 20.417 14C20.417 13.6778 20.6782 13.4167 21.0003 13.4167C21.3225 13.4167 21.5837 13.6778 21.5837 14Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5837 14C14.5837 14.3222 14.3225 14.5833 14.0003 14.5833C13.6782 14.5833 13.417 14.3222 13.417 14C13.417 13.6778 13.6782 13.4167 14.0003 13.4167C14.3225 13.4167 14.5837 13.6778 14.5837 14Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.58366 14C7.58366 14.3222 7.32249 14.5833 7.00033 14.5833C6.67816 14.5833 6.41699 14.3222 6.41699 14C6.41699 13.6778 6.67816 13.4167 7.00033 13.4167C7.32249 13.4167 7.58366 13.6778 7.58366 14Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    flechaIzq: () => {
      return (
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1L1 5L5 9"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    none: () => {
      return null;
    },
    eliminar: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_286_5724)">
            <path
              d="M18 6.53003H19"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 10.47V16.53"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 9.31003V17.58"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 10.47V16.53"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.795 20.472H8.205C6.987 20.472 6 19.485 6 18.267V6.52802H18V18.267C18 19.485 17.013 20.472 15.795 20.472Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 6.52801L15.262 4.22302C15.129 3.80902 14.744 3.52802 14.31 3.52802H9.69C9.255 3.52802 8.87 3.80902 8.738 4.22302L8 6.52801"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 6.53003H6"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_286_5724">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    compartir: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.55286 10.1141C9.59439 11.1556 9.59439 12.8443 8.55286 13.8858C7.51133 14.9273 5.82268 14.9273 4.78115 13.8858C3.73962 12.8443 3.73962 11.1556 4.78115 10.1141C5.82268 9.07256 7.51133 9.07256 8.55286 10.1141Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.2189 4.78115C20.2604 5.82268 20.2604 7.51133 19.2189 8.55286C18.1773 9.59439 16.4887 9.59439 15.4472 8.55286C14.4056 7.51133 14.4056 5.82268 15.4472 4.78115C16.4887 3.73962 18.1773 3.73962 19.2189 4.78115Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.2189 15.4471C20.2604 16.4886 20.2604 18.1773 19.2189 19.2188C18.1773 20.2603 16.4887 20.2603 15.4472 19.2188C14.4056 18.1773 14.4056 16.4886 15.4472 15.4471C16.4887 14.4056 18.1773 14.4056 19.2189 15.4471Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.04004 10.81L14.96 7.85001"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.04004 13.19L14.96 16.15"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    imprimir: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11H6.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 7.82843V14C17.5 14.2652 17.3946 14.5196 17.2071 14.7071C17.0196 14.8946 16.7652 15 16.5 15H7.5C7.23478 15 6.98043 14.8946 6.79289 14.7071C6.60536 14.5196 6.5 14.2652 6.5 14V6C6.5 5.46957 6.71071 4.96086 7.08579 4.58579C7.46086 4.21071 7.96957 4 8.5 4H13.6716C13.9342 4 14.1943 4.05173 14.4369 4.15224C14.6796 4.25275 14.9001 4.40007 15.0858 4.58579L16.9142 6.41421C17.0999 6.59993 17.2472 6.82041 17.3478 7.06306C17.4483 7.30571 17.5 7.56579 17.5 7.82843Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 11.5H10"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 8.5H10"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    subir: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.324 9.068C3.885 9.401 2 11.47 2 14C2 16.761 4.239 19 7 19H18C20.209 19 22 17.209 22 15C22 12.791 20.209 11 18 11C18 7.686 15.314 5 12 5C9.363 5 7.129 6.703 6.324 9.068Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.83301 12.667L12 10.5L14.167 12.667"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 15.5V10.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    direccion: () => {
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="2" fill="#F2F3F6" />
          <path
            d="M19 9.5C19 11.139 20.788 12.889 21.808 13.754C22.0037 13.9122 22.2478 13.9985 22.4995 13.9985C22.7512 13.9985 22.9953 13.9122 23.191 13.754C24.212 12.889 26 11.139 26 9.5"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.4995 9.45C22.5111 9.45029 22.5222 9.45458 22.5309 9.46213C22.5397 9.46967 22.5455 9.48001 22.5475 9.49139C22.5495 9.50277 22.5475 9.51449 22.5418 9.52455C22.5361 9.53461 22.5271 9.5424 22.5164 9.54658C22.5056 9.55077 22.4937 9.5511 22.4827 9.54752C22.4718 9.54393 22.4623 9.53666 22.4561 9.52693C22.4499 9.5172 22.4472 9.50561 22.4486 9.49414C22.4499 9.48267 22.4552 9.47202 22.4635 9.464C22.4683 9.45939 22.4739 9.45579 22.4801 9.45338C22.4863 9.45098 22.4929 9.44983 22.4995 9.45Z"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 9.5C19 8.57174 19.3687 7.6815 20.0251 7.02513C20.6815 6.36875 21.5717 6 22.5 6C23.4283 6 24.3185 6.36875 24.9749 7.02513C25.6313 7.6815 26 8.57174 26 9.5"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.51367 20H24.4867"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.006 8C13.795 8 12 12.029 12 17C12 21.971 13.792 26 16 26"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0057 14H7.51367"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 17C25 18.78 24.4722 20.5201 23.4832 22.0001C22.4943 23.4802 21.0887 24.6337 19.4442 25.3149C17.7996 25.9961 15.99 26.1743 14.2442 25.8271C12.4984 25.4798 10.8947 24.6226 9.63604 23.364C8.37737 22.1053 7.5202 20.5016 7.17294 18.7558C6.82567 17.01 7.0039 15.2004 7.68509 13.5558C8.36628 11.9113 9.51983 10.5057 10.9999 9.51677C12.4799 8.52784 14.22 8 16 8"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 17C20 21.971 18.208 26 16 26"
            stroke="#969EAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    direccionSave: () => {
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="2" fill="#C6F3D5" />
          <path
            d="M19 9.5C19 11.139 20.788 12.889 21.808 13.754C22.0037 13.9122 22.2478 13.9985 22.4995 13.9985C22.7512 13.9985 22.9953 13.9122 23.191 13.754C24.212 12.889 26 11.139 26 9.5"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 9.45C22.5116 9.45029 22.5227 9.45458 22.5314 9.46213C22.5401 9.46967 22.546 9.48001 22.548 9.49139C22.55 9.50277 22.548 9.51449 22.5423 9.52455C22.5366 9.53461 22.5276 9.5424 22.5169 9.54658C22.5061 9.55077 22.4942 9.5511 22.4832 9.54752C22.4722 9.54393 22.4628 9.53666 22.4566 9.52693C22.4504 9.5172 22.4477 9.50561 22.4491 9.49414C22.4504 9.48267 22.4557 9.47202 22.464 9.464C22.4688 9.45939 22.4744 9.45579 22.4806 9.45338C22.4868 9.45098 22.4934 9.44983 22.5 9.45Z"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 9.5C19 8.57174 19.3687 7.6815 20.0251 7.02513C20.6815 6.36875 21.5717 6 22.5 6C23.4283 6 24.3185 6.36875 24.9749 7.02513C25.6313 7.6815 26 8.57174 26 9.5"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.51416 20H24.4872"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.006 8C13.795 8 12 12.029 12 17C12 21.971 13.792 26 16 26"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0062 14H7.51416"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 17C25 18.78 24.4722 20.5201 23.4832 22.0001C22.4943 23.4802 21.0887 24.6337 19.4442 25.3149C17.7996 25.9961 15.99 26.1743 14.2442 25.8271C12.4984 25.4798 10.8947 24.6226 9.63604 23.364C8.37737 22.1053 7.5202 20.5016 7.17294 18.7558C6.82567 17.01 7.0039 15.2004 7.68509 13.5558C8.36628 11.9113 9.51983 10.5057 10.9999 9.51677C12.4799 8.52784 14.22 8 16 8"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 17C20 21.971 18.208 26 16 26"
            stroke="#29D884"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    flechaDer: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 16L14 12L10 8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    ubicacion: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.116 14.187C5.562 14.655 3 15.96 3 17.5C3 19.433 7.029 21 12 21C16.971 21 21 19.433 21 17.5C21 15.96 18.438 14.655 14.884 14.187"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 7.833C18 4.612 15.314 2 12 2C8.686 2 6 4.612 6 7.833C6 12.208 12 17 12 17C12 17 18 12.208 18 7.833Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.4142 6.58579C14.1953 7.36684 14.1953 8.63317 13.4142 9.41422C12.6332 10.1953 11.3668 10.1953 10.5858 9.41422C9.80474 8.63317 9.80474 7.36684 10.5858 6.58579C11.3668 5.80474 12.6332 5.80474 13.4142 6.58579Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    puntoVenta: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 21H21"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 21L4.0001 10.9554"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.0732 21L20.0733 10.941"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.7246 7.47765C21.8706 7.75278 21.9603 8.05432 21.9882 8.36457C22.0162 8.67482 21.9819 8.98753 21.8873 9.28433C21.7264 9.79079 21.4059 10.2315 20.9737 10.5407C20.5414 10.8499 20.0208 11.0108 19.4895 10.9994C18.9582 10.9881 18.4449 10.805 18.0263 10.4777C17.6077 10.1503 17.3063 9.69628 17.1672 9.18341C17.1584 9.15362 17.1402 9.12748 17.1153 9.10889C17.0904 9.09029 17.0601 9.08025 17.0291 9.08025C16.998 9.08025 16.9678 9.09029 16.9429 9.10889C16.918 9.12748 16.8998 9.15362 16.8909 9.18341C16.749 9.70495 16.4394 10.1653 16.01 10.4935C15.5805 10.8217 15.055 10.9994 14.5145 10.9994C13.974 10.9993 13.4485 10.8214 13.0191 10.4932C12.5897 10.1649 12.2802 9.70447 12.1384 9.1829C12.1296 9.1531 12.1114 9.12694 12.0865 9.10834C12.0616 9.08973 12.0314 9.07968 12.0003 9.07968C11.9692 9.07968 11.939 9.08973 11.9141 9.10834C11.8892 9.12694 11.871 9.1531 11.8622 9.1829C11.7203 9.70448 11.4108 10.1649 10.9813 10.4931C10.5518 10.8213 10.0263 10.9992 9.4858 10.9991C8.94527 10.9991 8.41977 10.8213 7.99033 10.493C7.5609 10.1647 7.25139 9.70431 7.10955 9.18273C7.10072 9.15295 7.0825 9.12681 7.05761 9.10823C7.03272 9.08964 7.00249 9.0796 6.97142 9.0796C6.94036 9.0796 6.91012 9.08964 6.88523 9.10823C6.86034 9.12681 6.84212 9.15295 6.83329 9.18273C6.69417 9.69555 6.39279 10.1496 5.97422 10.4769C5.55564 10.8042 5.04237 10.9872 4.51114 10.9986C3.97991 11.01 3.45926 10.8491 3.02706 10.54C2.59486 10.2309 2.27432 9.7902 2.11337 9.28381C2.01876 8.98696 1.98441 8.6742 2.01235 8.36389C2.0403 8.05358 2.12997 7.75198 2.27609 7.47681L3.98281 4.09822C4.14965 3.76794 4.40485 3.49042 4.72001 3.29654C5.03517 3.10265 5.39795 3 5.76797 3H18.2323C18.6023 3 18.9651 3.10266 19.2802 3.29654C19.5954 3.49043 19.8506 3.76794 20.0174 4.09822L21.7246 7.47765Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 21V10.941"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 16H4"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    añadirUbi: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8V16"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 12H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    transferencia: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20H3"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 11H12"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.7 20H19C20.105 20 21 19.105 21 18V5C21 3.895 20.105 3 19 3H5C3.895 3 3 3.895 3 5V16.209"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 7H17"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 18L11 20L9 22"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    credito: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_175)">
            <path
              d="M22 17V14M22 14C22 13.1707 20.32 12.5 18.25 12.5C16.18 12.5 14.5011 13.1718 14.5 14V20C14.5011 20.8282 16.1789 21.5 18.25 21.5C20.3211 21.5 21.9989 20.8282 22 20V14Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.62988 13.866L11.2859 11.637V6.98602"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.7693 9.00003C19.3923 7.34878 18.5569 5.83746 17.3592 4.6399C16.1615 3.44233 14.65 2.60717 12.9987 2.23045C11.3474 1.85373 9.62329 1.95075 8.02468 2.51037C6.42607 3.06999 5.01787 4.06947 3.96206 5.39385C2.90625 6.71824 2.2457 8.31374 2.05639 9.99686C1.86707 11.68 2.15668 13.3824 2.8919 14.9082C3.62712 16.434 4.77809 17.7214 6.21244 18.6221C7.64679 19.5229 9.30627 20.0005 11 20"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.501 14C14.501 14.8282 16.1799 15.5 18.251 15.5C20.322 15.5 21.9999 14.8282 21.9999 14"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.501 17C14.501 17.8282 16.1799 18.5 18.251 18.5C20.322 18.5 22.001 17.8282 22.001 17"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_541_175">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    contraentrega: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 21H4C3.44771 21 3 20.5523 3 20V14C3 13.4477 3.44771 13 4 13H6C6.55228 13 7 13.4477 7 14V20C7 20.5523 6.55228 21 6 21ZM6 21C6 21 6 21 6 21Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 4V8.6"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 14V10.04C19.9972 9.24427 19.3517 8.60053 18.556 8.59998H8.444C7.64829 8.60052 7.00275 9.24427 7 10.04V15.1"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 14V7.97101C7.00019 7.58092 7.07908 7.19503 7.23194 6.83615L8.02294 4.98615C8.27848 4.38784 8.86641 3.99978 9.517 4.00001H17.482C18.1346 3.9979 18.7252 4.38612 18.982 4.98601L19.773 6.83801C19.9244 7.19717 20.0016 7.58324 20 7.97301V14.485"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 17H15.333C15.7657 17 16.1868 16.8597 16.533 16.6L18.949 14.788C19.5522 14.3359 20.396 14.396 20.929 14.929C21.5205 15.52 21.5209 16.4786 20.9299 17.0701C20.9296 17.0704 20.9293 17.0707 20.929 17.071L18.856 19.144C18.2976 19.7025 17.5864 20.0831 16.812 20.238L13.882 20.824C13.3011 20.9401 12.7017 20.9258 12.127 20.782L9.477 20.12C9.16019 20.0402 8.83472 19.9999 8.508 20H7"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 17H14.485C15.3217 17 16 16.3217 16 15.485V15.185C16 14.4901 15.527 13.8843 14.8528 13.716L12.5609 13.143C12.1885 13.049 11.806 13.001 11.422 13C10.4948 12.9997 9.58825 13.2743 8.817 13.789L7 15"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    billetera: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_204_757)">
            <path
              d="M20 16.5V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H5.5C4.83696 21 4.20107 20.7366 3.73223 20.2678C3.26339 19.7989 3 19.163 3 18.5V5.5"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5 11.5H20C20.2652 11.5 20.5196 11.6054 20.7071 11.7929C20.8946 11.9804 21 12.2348 21 12.5V15.5C21 15.7652 20.8946 16.0196 20.7071 16.2071C20.5196 16.3946 20.2652 16.5 20 16.5H18.5C17.837 16.5 17.2011 16.2366 16.7322 15.7678C16.2634 15.2989 16 14.663 16 14C16 13.337 16.2634 12.7011 16.7322 12.2322C17.2011 11.7634 17.837 11.5 18.5 11.5Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 4H4.5C4.10218 4 3.72064 4.15804 3.43934 4.43934C3.15804 4.72064 3 5.10218 3 5.5C3 5.89782 3.15804 6.27936 3.43934 6.56066C3.72064 6.84196 4.10218 7 4.5 7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V11.5"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 7V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V7"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_204_757">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    flechaabajo: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 10L12 14L16 10"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    monedas: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_221_4402)">
            <path
              d="M3.00195 9C3.00195 10.105 5.23995 11 8.00195 11"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.00095 15C5.23995 15 3.00195 14.105 3.00195 13"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.998 5H12.999V8"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.002 16C11.002 17.105 13.24 18 16.002 18C18.764 18 21.002 17.105 21.002 16"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.002 12C11.002 13.105 13.24 14 16.002 14C18.764 14 21.002 13.105 21.002 12"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 10C13.24 10 11 10.895 11.002 12"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.002 12V20C11.002 21.105 13.24 22 16.002 22"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 10C18.76 10 21 10.895 20.998 12"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12V20C21 21.105 18.762 22 16 22"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 19C5.239 19 3 18.105 3 17"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 7C10.7614 7 13 6.10457 13 5C13 3.89543 10.7614 3 8 3C5.23858 3 3 3.89543 3 5C3 6.10457 5.23858 7 8 7Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 5V17"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_4402">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    promocion: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.49426 13.4637L4.69426 15.0277L4.95226 16.9747C5.02144 17.4993 5.2613 17.9866 5.63485 18.3614C6.00839 18.7362 6.49487 18.9777 7.01926 19.0487L8.97126 19.3097L10.5343 20.4997C10.9548 20.8212 11.4694 20.9954 11.9988 20.9954C12.5281 20.9954 13.0427 20.8212 13.4633 20.4997L15.0273 19.3047L16.9753 19.0467C17.5006 18.9772 17.9885 18.7366 18.3634 18.3621C18.7383 17.9876 18.9793 17.5 19.0493 16.9747L19.3093 15.0227C19.3093 15.0227 19.9093 14.2327 20.5043 13.4597C20.8256 13.0391 20.9998 12.5245 20.9998 11.9952C20.9998 11.4659 20.8256 10.9512 20.5043 10.5307L19.3093 8.97066L19.0513 7.02366C18.9818 6.4983 18.7412 6.01045 18.3667 5.63556C17.9922 5.26066 17.5045 5.0196 16.9793 4.94966L15.0263 4.68966L13.4633 3.49966C13.0427 3.17812 12.5281 3.00391 11.9988 3.00391C11.4694 3.00391 10.9548 3.17812 10.5343 3.49966L8.97026 4.68966L7.02226 4.94866C6.49726 5.0185 6.00987 5.25927 5.63537 5.63377C5.26087 6.00827 5.0201 6.49566 4.95026 7.02066L4.68926 8.97266C4.68926 8.97266 4.08926 9.76266 3.48926 10.5357C3.16811 10.9561 2.99414 11.4706 2.99414 11.9997C2.99414 12.5288 3.16811 13.0432 3.48926 13.4637H3.49426Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.90039 14.1004L14.1004 9.90039"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2884 13.9533C14.322 13.9869 14.3449 14.0296 14.3543 14.0762C14.3636 14.1228 14.3588 14.171 14.3407 14.2149C14.3225 14.2588 14.2918 14.2963 14.2523 14.3227C14.2128 14.3491 14.1664 14.3632 14.1189 14.3632C14.0714 14.3632 14.025 14.3491 13.9855 14.3227C13.946 14.2963 13.9153 14.2588 13.8971 14.2149C13.879 14.171 13.8743 14.1228 13.8836 14.0762C13.8929 14.0296 13.9158 13.9869 13.9494 13.9533C13.9716 13.931 13.998 13.9132 14.0271 13.9011C14.0562 13.889 14.0874 13.8828 14.1189 13.8828C14.1504 13.8828 14.1816 13.889 14.2107 13.9011C14.2398 13.9132 14.2662 13.931 14.2884 13.9533Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0482 9.70722C10.0818 9.74076 10.1047 9.78353 10.114 9.8301C10.1233 9.87667 10.1186 9.92496 10.1005 9.96884C10.0823 10.0127 10.0515 10.0502 10.0121 10.0766C9.97259 10.103 9.92616 10.1171 9.87867 10.1171C9.83118 10.1171 9.78475 10.103 9.74527 10.0766C9.70579 10.0502 9.67503 10.0127 9.65688 9.96884C9.63874 9.92496 9.63402 9.87667 9.64333 9.8301C9.65263 9.78353 9.67555 9.74076 9.70917 9.70722C9.73138 9.68488 9.75779 9.66715 9.78688 9.65505C9.81597 9.64295 9.84717 9.63672 9.87867 9.63672C9.91018 9.63672 9.94137 9.64295 9.97046 9.65505C9.99955 9.66715 10.026 9.68488 10.0482 9.70722Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
    bancolombia: () => {
      return (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="52" height="52" fill="url(#pattern0_133_6837)" />
          <defs>
            <pattern
              id="pattern0_133_6837"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use transform="scale(0.00444444)" />
            </pattern>
            <image
              id="image0_133_6837"
              width="225"
              height="225"
              preserveAspectRatio="none"
            />
          </defs>
        </svg>
      );
    },
    daviplata: () => {
      return <svg></svg>;
    },
    nequi: () => {
      return <svg></svg>;
    },
    davivienda: () => {
      return <svg></svg>;
    },
    billete: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.002 9.375V8.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.002 14.625V15.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.484 13.999C10.711 14.37 11.098 14.627 11.565 14.627H12.003H12.524C13.203 14.627 13.752 14.077 13.752 13.399C13.752 12.835 13.368 12.344 12.822 12.206L11.182 11.794C10.637 11.657 10.252 11.165 10.252 10.601C10.252 9.92205 10.802 9.37305 11.48 9.37305H12.001H12.439C12.906 9.37305 13.292 9.62805 13.519 9.99805"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.804 18.2129C17.299 17.7119 14.715 17.7739 12.237 18.3929L12 18.4529C9.366 19.1109 6.619 19.1769 3.957 18.6439L3.804 18.6129C3.336 18.5199 3 18.1089 3 17.6329V6.7939C3 6.1629 3.577 5.6899 4.196 5.8129C6.701 6.3139 9.285 6.2519 11.763 5.6329L12.236 5.5149C14.714 4.8959 17.299 4.8339 19.803 5.3349L20.195 5.4129C20.664 5.5069 21 5.9169 21 6.3939V17.2329C21 17.8639 20.423 18.3369 19.804 18.2129Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    },
  };
  return icons[icono as keyof typeof icons]();
}
