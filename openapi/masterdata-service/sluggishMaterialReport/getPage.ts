import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/呆滞物料分析报表相关/getPageUsingPOST_28
*/
export default function fetchMethod(options: { data: GetPage }, extraOptions?: any) {
    return http<IJSONResultPageInformationDullMaterialsReportQueryDetailsResponseObject>(
        {
            url: "/masterdata-service/sluggishMaterialReport/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«呆滞物料报表查询明细响应对象»» */
export interface IJSONResultPageInformationDullMaterialsReportQueryDetailsResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationDullMaterialsReportQueryDetailsResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«呆滞物料报表查询明细响应对象» */
export interface IPageInformationDullMaterialsReportQueryDetailsResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IDullMaterialReportQueryDetailsResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationDullMaterialsReportQueryDetailsResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationDullMaterialsReportQueryDetailsResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 呆滞物料报表查询明细响应对象 */
export interface IDullMaterialReportQueryDetailsResponseObject {
    /** 物料编号 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 单位 */
    materialUnit?: string;
    /** 数量 */
    quantity?: number;
    /** 最后一次入库时间 */
    lastInStorageTime?: string;
    /** 最后一次入库 - 应用id */
    lastInStorageFlowPathId?: number;
    /** 最后一次入库 - 应用code */
    lastInStorageFlowPathCode?: string;
    /** 最后一次入库 - 单据id */
    lastInStorageBillId?: number;
    /** 最后一次出库时间 */
    lastOutStorageTime?: string;
    /** 最后一次出库 - 应用id */
    lastOutStorageFlowPathId?: number;
    /** 最后一次出库 - 应用code */
    lastOutStorageFlowPathCode?: string;
    /** 最后一次出库 - 单据id */
    lastOutStorageBillId?: number;
}

export enum EPageInformationDullMaterialsReportQueryDetailsResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationDullMaterialsReportQueryDetailsResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
