import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备数采接口管理相关/getApiLogPageUsingPOST
*/
export default function fetchMethod(data: IOpenApiRequestsSearchVO, extraOptions?: any) {
    return http<IJSONResultPagingInformationOpenApiRequestLogReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollectionApi/getApiLogPage",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 开放api请求搜索VO */
export interface IOpenApiRequestsSearchVO {
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«分页信息«开放api请求日志返回VO»» */
export interface IJSONResultPagingInformationOpenApiRequestLogReturnsVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPagingInformationOpenApiRequestLogReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«开放api请求日志返回VO» */
export interface IPagingInformationOpenApiRequestLogReturnsVO {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IOpenApiRequestLogReturnsVO[];
    /** 最后页页码 */
    lastPage: number;
    /** 是否有上一页 */
    hasPreviousPage: string;
    /** 是否有下一页 */
    hasNextPage: string;
    /** 上一页页码 */
    previousPage: number;
    /** 下一页页码 */
    nextPage: number;
}
/** 开放api请求日志返回VO */
export interface IOpenApiRequestLogReturnsVO {
    /** id */
    id: number;
    /** 请求员工id */
    reqUserId: number;
    /** 请求员工姓名 */
    reqUsername: string;
    /** 请求ip */
    clientIp: string;
    /** 请求类型 */
    reqType: string;
    /** 请求类型描述 */
    reqTypeDesc: string;
    /** 请求内容 */
    reqBody: string;
    /** 是否成功 */
    isSuccess: string;
    /** 异常码 */
    errorCode: string;
    /** 异常信息 */
    errorInfo: string;
    /** 创建时间 */
    createTime: string;
}
