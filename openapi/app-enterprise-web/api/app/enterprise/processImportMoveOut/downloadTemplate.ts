import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/出料数据导入相关/downloadTemplateUsingGET
export default function fetchMethod() {
    return get<any>({
      url: "/app-enterprise-web/api/app/enterprise/processImportMoveOut/downloadTemplate",
    });
}
