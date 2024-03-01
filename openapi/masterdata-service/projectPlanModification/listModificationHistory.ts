import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.135.148:16700/doc.html#/default/项目计划变更相关/listModificationHistoryUsingGET_2
*/
export default function fetchMethod(options: { params: { projectPlanId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectCollectionChangeInformation>(
        {
            url: "/masterdata-service/projectPlanModification/listModificationHistory",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目集合变更信息»» */
export interface IJSONResultListProjectCollectionChangeInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectCollectionChangeInformation[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目集合变更信息 */
export interface IProjectCollectionChangeInformation {
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
