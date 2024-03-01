import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.135.148:16700/doc.html#/default/项目成员变更相关/listModificationHistoryUsingGET
*/
export default function fetchMethod(options: { params: { ProjectId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectMemberChangeInformation>(
        {
            url: "/masterdata-service/projectMemberModification/listModificationHistory",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目成员变更信息»» */
export interface IJSONResultListProjectMemberChangeInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectMemberChangeInformation[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目成员变更信息 */
export interface IProjectMemberChangeInformation {
    /** code */
    code?: string;
    /** 版本创建时间 */
    createTime?: number;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** id */
    id?: string;
    /** 发起变更人员 */
    modifyUserId?: string;
    /** 项目编号 */
    projectCode?: string;
    /** 项目名称 */
    projectId?: string;
    /** 版本更新时间 */
    updateTime?: number;
}
