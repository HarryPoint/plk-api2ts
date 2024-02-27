import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目计划变更版本记录相关/getProjectModificationHistoryDetailUsingGET_2
*/
export default function fetchMethod(options: { params: { projectPlanModificationId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectPlanChangeInformationVersionRecord>(
        {
            url: "/masterdata-service/projectPlanModificationHistory/getProjectModificationHistoryDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目计划变更信息版本记录» */
export interface IJSONResultProjectPlanChangeInformationVersionRecord {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectPlanChangeInformationVersionRecord;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目计划变更信息版本记录 */
export interface IProjectPlanChangeInformationVersionRecord {
    /** undefined */
    appId?: string;
    /** undefined */
    modificationId?: string;
    /** undefined */
    dataSnapshot?: Record<string, any>[];
}
