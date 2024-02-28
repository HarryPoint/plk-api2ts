import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏相关/queryRecentProjectMemorabiliaUsingPOST
*/
export default function fetchMethod(options: { data: IProjectEventsLargeScreenQueryDto }, extraOptions?: any) {
    return http<IJSONResultListProjectEventResponseObject>(
        {
            url: "/masterdata-service/projectDashboard/queryRecentProjectMemorabilia",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目大事记大屏查询dto */
export interface IProjectEventsLargeScreenQueryDto {
    /** 项目大类 */
    projectCategory: string;
    /** 查询条数 */
    limit?: number;
    /** undefined */
    projectIds?: string[];
}
/** JSONResult«List«项目大事记响应对象»» */
export interface IJSONResultListProjectEventResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectEventResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目大事记响应对象 */
export interface IProjectEventResponseObject {
    /** 创建时间 */
    createTime?: number;
    /** 大事记内容 */
    content?: string;
    /** 项目大事记id */
    projectMemorabiliaId?: string;
    /** 项目id */
    projectId?: string;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
}
