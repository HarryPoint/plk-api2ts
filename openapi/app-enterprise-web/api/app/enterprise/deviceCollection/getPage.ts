import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/设备数采数据概览相关/getPageUsingPOST_3
export default function fetchMethod(data: IDeviceDataOverviewSearchVO) {
    return http<IJSONResultPagingInformationDeviceDataOverviewReturnsVO>({
        url: "/app-enterprise-web/api/app/enterprise/deviceCollection/getPage",
        method: "post",
        data,
    });
}
// 设备数据概览搜索VO
export interface IDeviceDataOverviewSearchVO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 设备厂商
    firm: string;
    // 排序字段集
    orders: IPagingSortVO[];
    // 设备型号
    deviceType: string;
    // 名称
    name: string;
    // 设备状态
    runningStatus: string;
    // 通讯开关状态
    apiSwitchStatus: string;
    // 在线状态
    onlineStatus: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«设备数据概览返回VO»»
export interface IJSONResultPagingInformationDeviceDataOverviewReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationDeviceDataOverviewReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«设备数据概览返回VO»
export interface IPageInformationDeviceDataOverviewReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IDeviceDataOverviewBackToVO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 设备数据概览返回VO
export interface IDeviceDataOverviewBackToVO {
    // id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 设备数采方案id
    deviceCollectionPlanId: number;
    // 设备数采方案名称
    deviceCollectionPlanName: string;
    // 设备数采方案编号
    deviceCollectionPlanCode: string;
    // 通讯开关状态
    apiSwitchStatus: string;
    // 通讯开关状态描述
    apiSwitchStatusDesc: string;
    // 最后通讯时间
    lastApiTime: string;
    // 在线状态
    onlineStatus: string;
    // 在线状态描述
    onlineStatusDesc: string;
    // 设备状态
    runningStatus: string;
    // 设备状态描述
    runningStatusDesc: string;
    // 所属设备型号类型名称
    deviceType: string;
}
