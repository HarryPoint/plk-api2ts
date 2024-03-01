import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/项目资源统计相关/queryProjectResourcesStatisticsReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPageInformationItemResourceStatisticsReportResponseObject>(
        {
            url: "/masterdata-service/projectResourcesStatisticReport/queryProjectResourcesStatisticsReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目资源统计报表响应对象»» */
export interface IJSONResultPageInformationItemResourceStatisticsReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationItemResourceStatisticsReportResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«项目资源统计报表响应对象» */
export interface IPageInformationItemResourceStatisticsReportResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationItemResourceStatisticsReportResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationItemResourceStatisticsReportResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheProjectResourceStatisticsReportRespondsToTheObject[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 项目资源统计报表响应对象 */
export interface ITheProjectResourceStatisticsReportRespondsToTheObject {
    /** 设备编号 */
    code?: string;
    /** 设备状态 */
    deviceStatus?: string;
    /** 设备状态描述 */
    deviceStatusDesc?: string;
    /** 结束使用日期 */
    endDate?: number;
    /** 设备信息id */
    id?: string;
    /** 设备型号 */
    model?: string;
    /** 设备名称 */
    name?: string;
    /** 关联使用项目 */
    projectId?: string;
    /** 关联使用项目名称 */
    projectName?: string;
    /** 开始使用日期 */
    startDate?: number;
}

export enum EPageInformationItemResourceStatisticsReportResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationItemResourceStatisticsReportResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
