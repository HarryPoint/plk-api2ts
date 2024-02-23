import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/用户账号相关/pageCurrentEnterpriseUsingPOST
export default function fetchMethod(data: IQueryTheCurrentEnterpriseUser, extraOptions?: any) {
    return http<IJSONResultPagingInformationEnterpriseUserResponse>(
        {
            url: "/plk-uaa-service/user/pageCurrentEnterprise",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 当前企业用户查询
export interface IQueryTheCurrentEnterpriseUser {
    // 创建人
    createUserIds: number[];
    // 当前页面
    pageNo: number;
    // 创建时间开始
    createBeginTime: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 员工姓名
    employeeName: string;
    // 导出字段集
    exportFields: string[];
    // 创建时间结束
    createEndTime: string;
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«企业用户响应»»
export interface IJSONResultPagingInformationEnterpriseUserResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationEnterpriseUserResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«企业用户响应»
export interface IPagingInformationEnterpriseUserResponse {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IEnterpriseUserResponse[];
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
// 企业用户响应
export interface IEnterpriseUserResponse {
    // 数据状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 用户id
    userId: number;
    // 手机号码
    telephone: string;
    // 员工id
    employeeId: number;
    // 员工
    employee: IEmployeeInformationResponse;
    // 角色集
    roleList: IRoleMessageResponse[];
    // 部门
    department: IDepartmentRespondsToDTO;
}
// 员工信息响应
export interface IEmployeeInformationResponse {
    // 数据状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 手机号
    telephone: string;
    // 邮件
    email: string;
}
// 角色信息响应
export interface IRoleMessageResponse {
    // 数据状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 是否是超级管理员
    isManage: string;
    // 是否是管理员
    isAdmin: string;
    // 描述
    description: string;
    // 应用级别
    applicationLevel: string;
    // 服务对象ID
    serviceObjectId: number;
    // 服务业务ID
    serviceBusinessId: number;
}
// 部门响应 DTO
export interface IDepartmentRespondsToDTO {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
