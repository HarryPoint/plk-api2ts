import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工相关/getUserByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultEmployeeVO>(
        {
            url: "/masterdata-service/employee/getUserByIdAndCheck",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«员工VO» */
export interface IJSONResultEmployeeVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmployeeVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 员工VO */
export interface IEmployeeVO {
    /** id */
    id?: string;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 所属账号id */
    userId?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 班组id */
    classGroupId?: string;
    /** 入职日期 */
    entryTime?: number;
    /** 离职日期 */
    dimissionTime?: number;
    /** 出生日期 */
    birthday?: number;
    /** 性别 */
    gender?: EEmployeeVO_gender;
    /** 学历 */
    educational?: EEmployeeVO_educational;
    /** 籍贯 */
    nativePlace?: string;
    /** 任职职位id */
    positionId?: string;
    /** 任职开始日期 */
    positionDate?: number;
}

export enum EEmployeeVO_gender {
    /** 男 */
    MAN = "MAN",
    /** 女 */
    WOMAN = "WOMAN"
}

export enum EEmployeeVO_educational {
    /** 小学 */
    PRIMARY = "PRIMARY",
    /** 初中 */
    JUNIOR = "JUNIOR",
    /** 高中 */
    HIGH = "HIGH",
    /** 大专 */
    COLLEGE = "COLLEGE",
    /** 本科 */
    UNDERGRADUATE = "UNDERGRADUATE",
    /** 研究生 */
    POSTGRADUATE = "POSTGRADUATE",
    /** 中技 */
    INTERMEDIATE_TECHNICAL = "INTERMEDIATE_TECHNICAL",
    /** 硕士 */
    MASTER = "MASTER",
    /** 中专 */
    TECHNICAL_SECONDARY = "TECHNICAL_SECONDARY"
}
