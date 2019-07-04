import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: {
          items: "items",
          item: "item",
          title_app: "hello Nguyen",
          active: "Active",
          completed: "Done",
          all: "All",
          delete: "Delete"
        },
        todo: {
          input_placeholder:
            "Enter todo name here (Press key Enter to add more)"
        }
      },
      vi: {
        common: {
          items: "công việc",
          item: "công việc",
          title_app: "xin chào Nguyen",
          active: "Đang xử lý",
          completed: "Hoàn tất",
          all: "Tất cả",
          delete: "Xóa"
        },
        todo: {
          input_placeholder:
            "Nhập tên công việc ở đây (Nhấn phím Enter để thêm mới)"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
