import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业路由相关/pageFavoriteUsingPOST
*/
export default function fetchMethod(options: { data: IQueryTheDTOFromTheEnterpriseRoutingTree }, extraOptions?: any) {
    return http<IJSONResultPageInformationUserCollectsEnterpriseRoutingDTO>(
        {
            url: "/plk-uaa-service/enterpriseRouter/pageFavorite",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由树查询 DTO */
export interface IQueryTheDTOFromTheEnterpriseRoutingTree {
    /** 客户端组编码 */
    clientGroupCode?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: string;
}
/** JSONResult«分页信息«用户收藏企业路由 DTO»» */
export interface IJSONResultPageInformationUserCollectsEnterpriseRoutingDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationTheUserCollectsTheEnterpriseRoutingDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«用户收藏企业路由 DTO» */
export interface IPageInformationTheUserCollectsTheEnterpriseRoutingDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheUserCollectsTheEnterpriseRouteDTO[];
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
/** 用户收藏企业路由 DTO */
export interface ITheUserCollectsTheEnterpriseRouteDTO {
    /** id */
    id?: number;
    /** 企业路由 */
    enterpriseRouter?: ITheEnterpriseRouteRespondsToTheDTO;
    /** 排序 */
    sort?: number;
}
/** 企业路由响应 DTO */
export interface ITheEnterpriseRouteRespondsToTheDTO {
    /** id */
    id?: number;
    /** 企业id */
    enterpriseId?: number;
    /** 路由id */
    routerId?: number;
    /** 是否系统路由 */
    isSystem?: string;
    /** 客户端组编码 */
    clientGroupCode?: string;
    /** 所属权限编码 */
    permissionCode?: string;
    /** 父级路由id */
    parentId?: number;
    /** 父级路由编码 */
    parentCode?: string;
    /** 路由name */
    name?: string;
    /** 路由code */
    code?: string;
    /** 菜单类型 */
    type?: string;
    /** 图标 */
    icon?: string;
    /** 级别 */
    level?: number;
    /** 路由排序 */
    sort?: number;
    /** 是否存在数据权限 */
    hasDataAuth?: string;
    /** 配置 */
    config?: ITheEnterpriseRouteConfigurationRespondsToTheDTO;
}
/** 企业路由配置响应 DTO */
export interface ITheEnterpriseRouteConfigurationRespondsToTheDTO {
    /** 菜单类型 */
    menuType?: string;
    /** 应用配置 */
    appConfig?: ITheEnterpriseApplicationRouteConfigurationRespondsToTheDTO;
    /** 外部报表配置 */
    rpExtConfig?: ITheEnterpriseApplicationRouteConfigurationRespondsToDTO1;
    /** 应用对应的组织字段列表 */
    appOrganizationFiledList?: ITheEnterpriseRouteApplicationFieldRespondsToTheDTO[];
}
/** 企业应用路由配置响应 DTO */
export interface ITheEnterpriseApplicationRouteConfigurationRespondsToTheDTO {
    /** 系统应用类型 */
    appSystemType?: string;
    /** 应用id */
    appId?: number;
}
/** 企业应用路由配置响应 DTO_1 */
export interface ITheEnterpriseApplicationRouteConfigurationRespondsToDTO1 {
    /** 外部报表id */
    extReportId?: number;
    /** 链接地址 */
    link?: string;
    /** 展示方式 */
    displayMode?: string;
}
/** 企业路由应用字段响应 DTO */
export interface ITheEnterpriseRouteApplicationFieldRespondsToTheDTO {
    /** 应用字段序列号 */
    appFieldSerialNo?: string;
    /** 应用字段名 */
    appFieldName?: string;
    /** 应用字段编码 */
    appFieldCode?: string;
    /** 应用字段排序 */
    appFieldSort?: number;
    /** 应用字段类型 */
    appFieldType?: string;
    /** 是否是表格内字段 */
    isTableField?: string;
    /** 父级流程表单编码 */
    parentFlowPathFormFieldCode?: string;
}
