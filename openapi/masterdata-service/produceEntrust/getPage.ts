import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/委外加工管理/getPageUsingPOST_13
*/
export default function fetchMethod(options: { data: IOutsourcingSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationOutsourcingReturnsVO>(
        {
            url: "/masterdata-service/produceEntrust/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 委外加工搜索VO */
export interface IOutsourcingSearchVO {
    /** 委外单号 */
    entrustNo?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 物料id */
    materialId?: string;
    /** 发起时间开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 发起时间结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«委外加工返回VO»» */
export interface IJSONResultPageInformationOutsourcingReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationIsOutsourcedBackToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«委外加工返回VO» */
export interface IPageInformationIsOutsourcedBackToVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IOutsourcingReturnsToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationIsOutsourcedBackToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationIsOutsourcedBackToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 委外加工返回VO */
export interface IOutsourcingReturnsToVO {
    /** id */
    id?: string;
    /** 委外单号 */
    entrustNo?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产任务id */
    produceTaskId?: string;
    /** 生产任务编号 */
    produceTaskNo?: string;
    /** 批次订单id */
    lotOrderId?: string;
    /** 批次订单号 */
    lotOrderNo?: string;
    /** 物料主数据id */
    materialId?: string;
    /** 物料主数据名称 */
    materialName?: string;
    /** 物料主数据编号 */
    materialCode?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 供应商编号 */
    supplierCode?: string;
    /** 发起工序id */
    entrustProcessId?: string;
    /** 发起工序名称 */
    entrustProcessName?: string;
    /** 发起工序编号 */
    entrustProcessCode?: string;
    /** 委外发起人 */
    createUserId?: string;
    /** 委外发起人姓名 */
    createUsername?: string;
    /** 委外发起时间 */
    createTime?: number;
    /** 委外总量(委外发出) */
    totalQuantity?: number;
    /** 实际返回数量(委外返回) */
    actualBackQuantity?: number;
    /** 报废总量(委外报废) */
    scrapQuantity?: number;
    /** 委外合格返回数量 */
    produceQuantity?: number;
    /** 剩余数量 */
    surplusQuantity?: number;
    /** 返回生产工艺路径步骤id */
    backRoutingStepId?: string;
    /** 接收工序id */
    backProcessId?: string;
    /** 接收工序名称 */
    backProcessName?: string;
    /** 接收工序编号 */
    backProcessCode?: string;
    /** 投料记录数 */
    backDetailsCount?: number;
    /** 首次投料时间 */
    firstBackTime?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationIsOutsourcedBackToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationIsOutsourcedBackToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
