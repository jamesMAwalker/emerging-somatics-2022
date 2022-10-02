import React from 'react'

export const HourglassIcon = ({ color='var(--color-text)' }) => {
  return (
    <svg
      width='39'
      height='54'
      viewBox='0 0 39 54'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M38.8075 4.01925V0.595055C38.8075 0.267172 38.5403 0 38.2124 0H0.595056C0.267172 0 0 0.267172 0 0.595055V4.01925C0 4.34713 0.267172 4.6143 0.595056 4.6143H4.67869C4.06546 7.07956 2.70279 14.8311 8.54762 18.9597C9.83892 19.8732 10.9535 20.6223 11.9086 21.2619C12.8885 21.9201 13.6674 22.4483 14.3049 22.9236C14.3487 22.988 14.4057 23.045 14.4755 23.09C14.6452 23.1994 14.7976 23.313 14.945 23.4282C15.021 23.4914 15.1019 23.5566 15.1713 23.619C15.2283 23.6681 15.2815 23.7189 15.3348 23.7693C15.429 23.8585 15.5107 23.9469 15.5917 24.0352C16.2016 24.7306 16.4927 25.5429 16.4969 26.5555C16.4931 27.388 16.3003 28.0871 15.8931 28.6949C15.8754 28.7185 15.8617 28.7428 15.8436 28.7664C15.8151 28.806 15.7796 28.8432 15.7494 28.8824C15.1077 29.6335 14.0056 30.3843 12.2786 31.5534C11.2421 32.2541 10.0029 33.0936 8.54182 34.1557C3.51913 37.8094 4.36653 46.0243 4.75175 48.4969H0.595916C0.268032 48.4969 0.000859767 48.7641 0.000859767 49.092V52.5149C0.000859767 52.8428 0.268032 53.11 0.595916 53.11H38.2133C38.5412 53.11 38.8083 52.8428 38.8083 52.5149V49.092C38.8083 48.7641 38.5412 48.4969 38.2133 48.4969H34.4496C34.8349 46.0234 35.6823 37.8092 30.6596 34.1557C29.1986 33.0936 27.9593 32.255 26.9228 31.5534C25.1958 30.3843 24.0941 29.6336 23.452 28.8824C23.4218 28.8432 23.3863 28.8064 23.3578 28.7664C23.3388 28.7428 23.326 28.7185 23.3083 28.6949C22.9003 28.0871 22.7074 27.388 22.7045 26.5555C22.7087 25.5442 22.9994 24.7327 23.6073 24.0382C23.6915 23.9478 23.7749 23.8565 23.8719 23.7648C23.9207 23.7182 23.9702 23.6719 24.0219 23.6265C24.0954 23.5608 24.1812 23.4915 24.2618 23.4241C24.4075 23.3106 24.557 23.1987 24.7247 23.0901C24.7941 23.0455 24.8506 22.9889 24.8944 22.9249C25.5324 22.4496 26.3116 21.921 27.2929 21.262C28.2476 20.6215 29.3625 19.8732 30.6538 18.961C36.4978 14.8312 35.1359 7.07874 34.5228 4.61454H38.2137C38.5407 4.61496 38.8079 4.34779 38.8079 4.01949L38.8075 4.01925ZM37.6169 49.6878V51.921L1.18884 51.9206V49.6874L37.6169 49.6878ZM29.9654 17.9894C28.6836 18.895 27.5765 19.6383 26.6289 20.2746C25.2905 21.1732 24.2598 21.8723 23.4752 22.5297C23.3658 22.6168 23.2675 22.7085 23.1676 22.7998C23.0664 22.8923 22.9631 22.9856 22.8715 23.0773C22.8236 23.1277 22.7777 23.1793 22.7323 23.2301C22.0621 23.9465 21.6785 24.6762 21.5645 25.6326C21.5265 25.9535 21.5112 26.2595 21.5129 26.5568C21.5116 26.8533 21.5265 27.1601 21.5645 27.4802C21.6628 28.3044 21.9729 28.9577 22.4887 29.5775C22.8929 30.1111 23.4145 30.593 24.0818 31.0224C24.0855 31.0249 24.09 31.0237 24.0942 31.0262C24.7033 31.482 25.4135 31.9685 26.2563 32.5391C27.2842 33.2341 28.5114 34.0658 29.96 35.1196C34.5062 38.4253 33.5647 46.4617 33.2426 48.4978H5.95772C5.63397 46.4636 4.68788 38.4309 9.24025 35.1196C10.6889 34.0658 11.9154 33.2345 12.944 32.5391C13.7868 31.968 14.4967 31.482 15.1061 31.0262C15.1098 31.0237 15.1144 31.0249 15.1185 31.0224C15.7858 30.5926 16.3074 30.1107 16.7116 29.5775C17.2274 28.9577 17.5375 28.304 17.6358 27.4802C17.6738 27.1597 17.6887 26.8533 17.6874 26.5568C17.6887 26.2603 17.6738 25.9535 17.6358 25.6326C17.5214 24.6754 17.1365 23.9449 16.4655 23.2281C16.4218 23.1785 16.3772 23.1285 16.3313 23.0802C16.2368 22.9857 16.1302 22.8878 16.0245 22.7924C15.9287 22.7053 15.8346 22.6177 15.7297 22.5343C14.9443 21.8761 13.9127 21.1761 12.5719 20.2759C11.6242 19.6396 10.517 18.8967 9.23533 17.9894C3.82699 14.1692 5.4292 6.46764 5.91073 4.61553H33.2907C33.7706 6.46595 35.3728 14.1678 29.9648 17.9894L29.9654 17.9894ZM37.6169 3.42407H1.18884V1.19002H37.6169V3.42407ZM31.9484 10.0167C31.9278 10.0143 31.9092 10.0043 31.8881 10.0043L6.99136 10.0039C6.96287 10.0039 6.93933 10.0163 6.91207 10.02C6.88317 10.0242 6.85591 10.0291 6.82742 10.0374C6.77828 10.0514 6.73451 10.0712 6.69198 10.0973C6.66885 10.1109 6.64821 10.1245 6.62756 10.141C6.59081 10.1699 6.56025 10.2021 6.53093 10.2381C6.51028 10.2637 6.49253 10.2897 6.47642 10.3186C6.45578 10.3558 6.44132 10.3946 6.42976 10.4359C6.42398 10.4565 6.41035 10.4726 6.40663 10.4937C6.38475 10.6134 5.91523 13.4739 9.21758 16.8907C10.1161 17.819 12.2895 19.1698 14.0358 20.2549L14.7932 20.7269C17.1759 22.221 18.8272 24.7833 18.8983 24.894V29.1262C18.8983 29.4541 19.1654 29.7213 19.4933 29.7213C19.8212 29.7213 20.0884 29.4541 20.0884 29.1262V24.9009C20.1359 24.827 21.7976 22.2317 24.198 20.7261L24.9459 20.2615C26.696 19.1738 28.8751 17.8201 29.7736 16.8894C33.0759 13.4723 32.6065 10.6118 32.5846 10.4925C32.5292 10.1889 32.2468 9.99031 31.9482 10.0167L31.9484 10.0167ZM28.9161 16.0652C28.12 16.8894 25.921 18.2555 24.3163 19.2531L23.5651 19.7214C21.6226 20.9379 20.1699 22.7364 19.4947 23.6688C18.8191 22.7363 17.3663 20.9379 15.4243 19.7214L14.6636 19.2473C13.0623 18.2509 10.869 16.8878 10.0733 16.0659C7.96145 13.881 7.60181 12.041 7.56259 11.1957H31.4265C31.3877 12.0402 31.0285 13.8795 28.9158 16.0651L28.9161 16.0652ZM19.9168 36.2619C19.8536 36.2388 19.702 36.2132 19.6351 36.2132C18.9414 36.2132 18.5916 36.961 18.1853 37.8253C17.9928 38.2374 17.7731 38.7045 17.5778 38.9262C16.0243 40.6796 14.9073 40.9959 13.0573 41.5186C12.4118 41.7016 11.6975 41.9027 10.8756 42.193C6.25391 43.8188 7.00511 47.0047 7.01336 47.0368C7.08026 47.3015 7.31811 47.4857 7.58983 47.4857H31.55C31.8477 47.4857 32.0988 47.266 32.1388 46.9724C32.3849 45.2041 32.4874 43.424 31.5805 42.3808C30.9223 41.6259 29.8259 41.3237 28.1035 41.3786C27.8656 41.3885 27.6269 41.3959 27.3829 41.3959C26.0829 41.3959 24.9255 41.1519 23.5037 39.9568C22.6134 39.209 22.1013 38.497 21.6492 37.8665C21.1363 37.1521 20.6936 36.5348 19.9168 36.2618L19.9168 36.2619ZM22.7388 40.8691C24.9043 42.6873 26.6474 42.6212 28.1484 42.5688C29.4591 42.5151 30.2837 42.7042 30.6823 43.1626C31.1151 43.6586 31.222 44.6088 31.0275 46.2957L8.14882 46.2953C8.20622 45.5904 8.67697 44.228 11.2702 43.3151C12.0652 43.0355 12.7568 42.841 13.38 42.6639C15.2982 42.1208 16.6831 41.7298 18.4687 39.7138C18.7772 39.3653 19.0233 38.8383 19.2624 38.3296C19.383 38.0711 19.5697 37.6738 19.7063 37.4698C20.0379 37.6627 20.3059 38.036 20.683 38.5616C21.1521 39.2145 21.7343 40.0256 22.7386 40.8692L22.7388 40.8691Z'
        fill={color}
      />
    </svg>
  )
}