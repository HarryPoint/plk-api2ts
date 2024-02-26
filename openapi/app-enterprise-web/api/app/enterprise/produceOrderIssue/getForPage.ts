import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/订单排产任务下发相关/getForPageUsingPOST_20
*/
export default function fetchMethod(options: { data: IProcessDataBaseSearchVO }, extraOptions?: any) {
    return http<IJSONResultPageInformationDynamicExpansionDataVOProductionOrderDeliveryExpansionInformationVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrderIssue/getForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程数据基础搜索VO */
export interface IProcessDataBaseSearchVO {
    /** 全局搜索 */
    allSearch?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 明细表表code，传值后，将会查询明细表数据 */
    tableColumnCode?: string;
    /** 当前的表单分组 */
    currentFormDataGrouping?: IFormDataGroupingDTO;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: ('NONE' | 'EQ' | 'LIKE' | 'RANGE' | 'SELECTOR' | 'IS_NULL' | 'NOT_NULL' | 'NE' | 'REGEXP');
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** 表单数据分组DTO */
export interface IFormDataGroupingDTO {
    /** 分组字段序列 */
    groupingFieldSerialNo?: string;
    /** 分组字段编码 */
    groupFieldCode?: string;
    /** 分组的值， 如果是关联表单，则是ID */
    groupingValue?: string;
    /** 分组名称 */
    groupingName?: string;
    /** 下级分组 */
    children?: IFormDataGroupingDTO[];
    /** 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N */
    cascadeFormData?: ('Y' | 'N');
    /** 多级基础数据上级ID */
    treeDataParentId?: number;
}
/** JSONResult«分页信息«动态拓展数据VO«生产订单下发扩展信息VO»»» */
export interface IJSONResultPageInformationDynamicExpansionDataVOProductionOrderDeliveryExpansionInformationVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationDynamicExpansionDataVOProductionOrderDeliveryExpansionInformationVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«动态拓展数据VO«生产订单下发扩展信息VO»» */
export interface IPageInformationDynamicExpansionDataVOProductionOrderDeliveryExpansionInformationVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IDynamicExpansionDataVOProductionOrderDeliveryExpansionInformationVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 动态拓展数据VO«生产订单下发扩展信息VO» */
export interface IDynamicExpansionDataVOProductionOrderDeliveryExpansionInformationVO {
    /** 拓展数据 */
    ext?: IProductionOrderDeliveryExtendedMessageVO;
    /** 动态数据 */
    data?: Record<string, Record<string, any>>;
}
/** 生产订单下发扩展信息VO */
export interface IProductionOrderDeliveryExtendedMessageVO {
    /** 生产订单id */
    produceOrderId?: number;
    /** 下发人id */
    issueUserId?: number;
    /** 下发人 */
    issueUser?: string;
    /** 下发时间 */
    issueTime?: string;
    /** 下发人id */
    planUserId?: number;
    /** 计划人 */
    planUser?: string;
    /** 计划时间 */
    planTime?: string;
}
