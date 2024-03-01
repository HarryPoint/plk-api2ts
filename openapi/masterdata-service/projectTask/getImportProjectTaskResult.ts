import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/项目任务相关/getImportProjectTaskResultUsingGET
*/
export default function fetchMethod(options: { params: { ImportRecordId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectTaskImportRecordQueryResponse>(
        {
            url: "/masterdata-service/projectTask/getImportProjectTaskResult",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目任务导入记录查询响应» */
export interface IJSONResultProjectTaskImportRecordQueryResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTaskImportRecordQueryResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务导入记录查询响应 */
export interface IProjectTaskImportRecordQueryResponse {
    /** 系统失败信息 */
    failedMessage?: string;
    /** 行数据失败信息列表 */
    failedMessageList?: IProjectTaskImportRecordErrorMessageQueryResponse[];
    /** 失败条数 */
    failedQuantity?: number;
    /** 导入文件id */
    importFileId?: string;
    /** 导入状态 */
    importStatus?: EProjectTaskImportRecordQueryResponse_importStatus;
    /** 进度 */
    progress?: number;
    /** 项目id */
    projectId?: string;
    /** 项目计划id */
    projectPlanId?: string;
    /** 成功条数 */
    successQuantity?: number;
    /** 总数 */
    totalQuantity?: number;
}
/** 项目任务导入记录错误信息查询响应 */
export interface IProjectTaskImportRecordErrorMessageQueryResponse {
    /** 失败信息 */
    failedMessage?: string;
    /** 行下标 */
    rowNo?: number;
}

export enum EProjectTaskImportRecordQueryResponse_importStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 导入中 */
    IMPORTING = "IMPORTING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 导入失败 */
    IMPORT_FAIL = "IMPORT_FAIL"
}
