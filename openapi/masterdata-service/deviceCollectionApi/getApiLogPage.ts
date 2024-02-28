import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采接口管理相关/getApiLogPageUsingPOST
*/
export default function fetchMethod(options: { data: IOpenApiRequestsSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationOpenApiRequestLogReturnsVO>(
        {
            url: "/masterdata-service/deviceCollectionApi/getApiLogPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 开放api请求搜索VO */
export interface IOpenApiRequestsSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«开放api请求日志返回VO»» */
export interface IJSONResultPagingInformationOpenApiRequestLogReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationOpenApiRequestLogReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«开放api请求日志返回VO» */
export interface IPagingInformationOpenApiRequestLogReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IOpenApiRequestLogReturnsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationOpenApiRequestLogReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationOpenApiRequestLogReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 开放api请求日志返回VO */
export interface IOpenApiRequestLogReturnsVO {
    /** id */
    id?: string;
    /** 请求员工id */
    reqUserId?: string;
    /** 请求员工姓名 */
    reqUsername?: string;
    /** 请求ip */
    clientIp?: string;
    /** 请求类型 */
    reqType?: EOpenApiRequestLogReturnsVO_reqType;
    /** 请求类型描述 */
    reqTypeDesc?: string;
    /** 请求内容 */
    reqBody?: string;
    /** 是否成功 */
    isSuccess?: EOpenApiRequestLogReturnsVO_isSuccess;
    /** 异常码 */
    errorCode?: string;
    /** 异常信息 */
    errorInfo?: string;
    /** 创建时间 */
    createTime?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationOpenApiRequestLogReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationOpenApiRequestLogReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EOpenApiRequestLogReturnsVO_reqType {
    /** 接口传输 */
    API = "API",
    /** 手动上报 */
    HANDLE = "HANDLE"
}

export enum EOpenApiRequestLogReturnsVO_isSuccess {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
