import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/exportFailureDataUsingPOST
export default function fetchMethod(data: IExportFailureDataRequestDTO) {
    return http<IJSONResultlong>({
        url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/exportFailureData",
        method: "post",
        data,
    });
}
// ExportFailureDataRequestDTO
export interface IExportFailureDataRequestDTO {
    // 导入记录的ID
    id: number;
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
