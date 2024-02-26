import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工序任务设置相关/getAllProcessOperateUserIdsUsingPOST
*/
export default function fetchMethod(data: IProcessOperatorIdSearchVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/processTaskSetting/getAllProcessOperateUserIds",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 工序操作人员id搜索VO */
export interface IProcessOperatorIdSearchVO {
    /** 当前页面 */
    pageNo: number;
    /** 工序id */
    processId: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 员工类型 */
    userType: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
