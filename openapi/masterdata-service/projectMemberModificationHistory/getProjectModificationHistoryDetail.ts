import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目成员变更版本记录相关/getProjectModificationHistoryDetailUsingGET
*/
export default function fetchMethod(options: { params: { projectMemberModificationId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectMemberChangeInformationVersionRecord>(
        {
            url: "/masterdata-service/projectMemberModificationHistory/getProjectModificationHistoryDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目成员变更信息版本记录» */
export interface IJSONResultProjectMemberChangeInformationVersionRecord {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectMemberChangeInformationVersionRecord;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目成员变更信息版本记录 */
export interface IProjectMemberChangeInformationVersionRecord {
    /** undefined */
    appId?: string;
    /** undefined */
    modificationId?: string;
    /** undefined */
    dataSnapshot?: Record<string, any>[];
}
