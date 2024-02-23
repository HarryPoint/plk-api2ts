import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/overwriteImportAllUsingPOST
export default function fetchMethod(data: IAllOverwriteImportRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/overwriteImportAll",
      data,
    });
}
// AllOverwriteImportRequestDTO
export interface IAllOverwriteImportRequestDTO {
    // 表数据ID
    tableDataId: number;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
