import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/continueImportUsingPOST
export default function fetchMethod(data: ITableDataContinueImportRequestDTO) {
    return post<IJSONResultlong['data']>({
      url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/continueImport",
      data,
    });
}
// TableDataContinueImportRequestDTO
export interface ITableDataContinueImportRequestDTO {
    // undefined
    tableDataId: number;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
