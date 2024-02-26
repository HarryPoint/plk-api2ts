import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品服务相关/pageUsingPOST_6
*/
export default function fetchMethod(options: { data: IProductServicePageQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProductServicePagingResponseObject>(
        {
            url: "/plk-uaa-service/productService/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 产品服务分页查询对象 */
export interface IProductServicePageQueryObject {
    /** 产品服务编号 */
    code?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 企业ids */
    enterpriseIds?: number[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 到期时间 -- 结束 */
    expireEndTime?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 创建时间 -- 开始 */
    createBeginTime?: string;
    /** 服务类型列表 */
    typeList?: ('TRIAL' | 'FORMAL')[];
    /** undefined */
    todayEndTime?: string;
    /** 到期时间 -- 开始 */
    expireBeginTime?: string;
    /** 服务状态列表 */
    statusList?: ('ON' | 'EXPIRE' | 'INVALID')[];
    /** 创建时间 -- 结束 */
    createEndTime?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«产品服务分页响应对象»» */
export interface IJSONResultPagingInformationProductServicePagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProductServicePagingResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«产品服务分页响应对象» */
export interface IPagingInformationProductServicePagingResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProductServicePagingResponseObject[];
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
/** 产品服务分页响应对象 */
export interface IProductServicePagingResponseObject {
    /** 产品服务id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 类型 */
    type?: ('TRIAL' | 'FORMAL');
    /** 企业id */
    enterpriseId?: number;
    /** 企业名称 */
    enterpriseName?: string;
    /** 产品类型 */
    productType?: ('MES');
    /** 到期时间 */
    expireTime?: string;
    /** 账号数 */
    availableAccountQuantity?: number;
    /** 状态 */
    status?: ('ON' | 'EXPIRE' | 'INVALID');
    /** 最近变动时间 */
    lastModifyTime?: string;
    /** 创建 */
    createTime?: string;
    /** 是否有新购的产品订单 */
    hanNewBuyProductOrder?: ('Y' | 'N');
}
