import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryRecentProjectMemorabiliaUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultListProjectEventResponseObject>(
        {
            url: "/masterdata-service/projectOverview/queryRecentProjectMemorabilia",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目概况查询dto */
export interface IProjectOverviewQueryDto {
    /** 项目id */
    projectId: string;
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** 查询条数 */
    limit?: number;
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
