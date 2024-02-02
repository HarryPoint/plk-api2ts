// 产出类报表搜索VO
export interface I产出类报表搜索VO {
    // 班组id集
    classGroupIds: number[];
    // 物料id集
    materialIds: number[];
    // 工序id集
    processIds: number[];
    // 日期筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 日期筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 查询时间维度类型
    timeType: string;
}
// JSONResult«产出类折线图返回VO«良品与报废报表返回VO»»
export interface IJSONResult产出类折线图返回VO良品与报废报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I产出类折线图返回VO良品与报废报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产出类折线图返回VO«良品与报废报表返回VO»
export interface I产出类折线图返回VO良品与报废报表返回VO {
    // 分组数据
    groupList: I产出类折线图分组返回VO良品与报废报表返回VO[];
    // 查询班组集
    classGroupList: IId名称编号VO[];
    // 查询工序集
    processList: IId名称编号VO[];
    // 查询物料集
    majorDataList: IId名称编号VO[];
    // 是否和预期查询相符 Y-相符，不显示异常信息；N-不相符，显示异常信息
    isConsistent: string;
    // 实际查询时间 - 开始
    actualBeginTime: string;
    // 实际查询时间 - 结束
    actualEndTime: string;
    // 实际数据条数
    actualDataCount: number;
}
// 产出类折线图分组返回VO«良品与报废报表返回VO»
export interface I产出类折线图分组返回VO良品与报废报表返回VO {
    // 数据分组id
    groupId: number;
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 详细点数据
    pointList: I良品与报废报表返回VO[];
}
// 良品与报废报表返回VO
export interface I良品与报废报表返回VO {
    // 数据时间（时间戳），根据当前选中的时间粒度去转换时间
    dataTime: string;
    // 合格加报废总量
    totalQuantity: number;
    // 合格数量
    produceQuantity: number;
    // 合格率
    produceRatio: number;
    // 合格率-大屏展示
    produceRatioScale2: number;
    // 报废数量
    scrapQuantity: number;
    // 报废率
    scrapRatio: number;
    // 报废率-大屏展示
    scrapRatioScale2: number;
}
// Id，名称，编号VO
export interface IId名称编号VO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
