import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/getProgressByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultImportProgressQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/getProgressById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ImportProgressQueryResponseDTO» */
export interface IJSONResultImportProgressQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IImportProgressQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ImportProgressQueryResponseDTO */
export interface IImportProgressQueryResponseDTO {
    /** 导入记录ID */
    importRecordId?: string;
    /** 文件名 */
    fileName?: string;
    /** 排在你前面的任务数 */
    numberOfTasksBefore?: string;
    /** 导入状态 */
    status?: EImportProgressQueryResponseDTO_status;
    /** 总数量 */
    totalNumber?: string;
    /** 已处理的数量 */
    numberOfProcessed?: string;
    /** 剩余时间 */
    surplusTime?: string;
    /** 可以导入数量 */
    numberOfImport?: string;
}

export enum EImportProgressQueryResponseDTO_status {
    /** 未导入 */
    NONE = "NONE",
    /** 排队中 */
    QUEUING = "QUEUING",
    /** 导入中 */
    IMPORTING = "IMPORTING",
    /** 完成导入 */
    COMPLETE = "COMPLETE"
}
