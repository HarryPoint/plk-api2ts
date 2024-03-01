import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/委外加工管理/getPageUsingPOST_13
*/
export default function fetchMethod(options: { data: IOutsourcingSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
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
    /** 发起时间开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 发起时间结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 委外单号 */
    entrustNo?: string;
    /** 物料id */
    materialId?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
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
    /** 响应结果 */
    data?: IPageInformationIsOutsourcedBackToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«委外加工返回VO» */
export interface IPageInformationIsOutsourcedBackToVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationIsOutsourcedBackToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationIsOutsourcedBackToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IOutsourcingReturnsToVO[];
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
/** 委外加工返回VO */
export interface IOutsourcingReturnsToVO {
    /** 实际返回数量(委外返回) */
    actualBackQuantity?: number;
    /** 投料记录数 */
    backDetailsCount?: number;
    /** 接收工序编号 */
    backProcessCode?: string;
    /** 接收工序id */
    backProcessId?: string;
    /** 接收工序名称 */
    backProcessName?: string;
    /** 返回生产工艺路径步骤id */
    backRoutingStepId?: string;
    /** 委外发起时间 */
    createTime?: number;
    /** 委外发起人 */
    createUserId?: string;
    /** 委外发起人姓名 */
    createUsername?: string;
    /** 委外单号 */
    entrustNo?: string;
    /** 发起工序编号 */
    entrustProcessCode?: string;
    /** 发起工序id */
    entrustProcessId?: string;
    /** 发起工序名称 */
    entrustProcessName?: string;
    /** 首次投料时间 */
    firstBackTime?: number;
    /** id */
    id?: string;
    /** 批次订单id */
    lotOrderId?: string;
    /** 批次订单号 */
    lotOrderNo?: string;
    /** 物料主数据编号 */
    materialCode?: string;
    /** 物料主数据id */
    materialId?: string;
    /** 物料主数据名称 */
    materialName?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 委外合格返回数量 */
    produceQuantity?: number;
    /** 生产任务id */
    produceTaskId?: string;
    /** 生产任务编号 */
    produceTaskNo?: string;
    /** 报废总量(委外报废) */
    scrapQuantity?: number;
    /** 供应商编号 */
    supplierCode?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 剩余数量 */
    surplusQuantity?: number;
    /** 委外总量(委外发出) */
    totalQuantity?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationIsOutsourcedBackToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationIsOutsourcedBackToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
