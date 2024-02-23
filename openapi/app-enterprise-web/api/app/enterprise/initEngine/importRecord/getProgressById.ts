import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/getProgressByIdUsingGET
export default function fetchMethod(params: { id: number }, extraOptions?: any) {
    return http<IJSONResultImportProgressQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/getProgressById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«ImportProgressQueryResponseDTO»
export interface IJSONResultImportProgressQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IImportProgressQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ImportProgressQueryResponseDTO
export interface IImportProgressQueryResponseDTO {
    // 导入记录ID
    importRecordId: number;
    // 文件名
    fileName: string;
    // 排在你前面的任务数
    numberOfTasksBefore: number;
    // 导入状态
    status: string;
    // 总数量
    totalNumber: number;
    // 已处理的数量
    numberOfProcessed: number;
    // 剩余时间
    surplusTime: number;
    // 可以导入数量
    numberOfImport: number;
}
