import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/pagingProduceStorageUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportInventoryRelatedSearchDTOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultPageInformationBaojingReportProductDailyReportResponseObject>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingReportProduceStorageResultVO",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶报表(库存)相关搜索DTO */
export interface IBaojingReportInventoryRelatedSearchDTO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    endDate?: string;
    /** 物料id集 */
    majorDataIds?: number[];
    /** 物料名称 */
    majorDataName?: string;
    /** 业务员ids */
    businessUserIds?: number[];
    /** 区域id */
    areaIds?: number[];
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    beginDate?: string;
    /** 物料类型 */
    materialTypes?: string[];
    /** 单据名称 */
    billNames?: string[];
    /** 保管员 */
    materialCurators?: string[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: string;
}
/** JSONResult«分页信息«宝晶报表(成品日报表)响应对象»» */
export interface IJSONResultPageInformationBaojingReportProductDailyReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationBaojingReportProductDailyReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«宝晶报表(成品日报表)响应对象» */
export interface IPageInformationBaojingReportProductDailyReportResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IBaojingReportFinishedDailyReportResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 宝晶报表(成品日报表)响应对象 */
export interface IBaojingReportFinishedDailyReportResponseObject {
    /** 物料id */
    majorDataId?: number;
    /** 物料编号 */
    majorDataCode?: string;
    /** 物料名称 */
    majorDataName?: string;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 区域id */
    areaId?: number;
    /** 区域名称 */
    areaName?: string;
    /** 期初-成品数 */
    beginProduceQuantity?: number;
    /** 期初-半成品数 */
    beginRawQuantity?: number;
    /** 期初-待处理数 */
    beginWaitQuantity?: number;
    /** 期初-报废数 */
    beginScrapQuantity?: number;
    /** 入库-成品数 */
    inProduceQuantity?: number;
    /** 入库-半成品数 */
    inRawQuantity?: number;
    /** 入库-待处理数 */
    inWaitQuantity?: number;
    /** 入库-报废数 */
    inScrapQuantity?: number;
    /** 出库-成品数 */
    outProduceQuantity?: number;
    /** 出库-半成品数 */
    outRawQuantity?: number;
    /** 出库-待处理数 */
    outWaitQuantity?: number;
    /** 出库-报废数 */
    outScrapQuantity?: number;
    /** 报废数 */
    scrapQuantity?: number;
    /** 期末-成品数 */
    endProduceQuantity?: number;
    /** 期末-半成品数 */
    endRawQuantity?: number;
    /** 期末-待处理数 */
    endWaitQuantity?: number;
    /** 数据来源 */
    source?: string;
}
